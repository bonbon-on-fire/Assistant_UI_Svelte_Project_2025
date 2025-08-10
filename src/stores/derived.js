// derived.js - Computed stores derived from base stores
// These automatically recalculate when their dependencies change

import { derived } from 'svelte/store';
import { conversationStore } from './conversation.js';
import { runtimeStore } from './runtime.js';
import { uiStore } from './ui.js';

// Message-related derived stores

/**
 * Total number of messages in the conversation
 * Recalculates whenever messages array changes
 */
export const messageCount = derived(
    conversationStore,
    $conversation => $conversation.messageArray.length
);

/**
 * Whether the conversation has any messages
 * Useful for showing empty states
 */
export const hasMessages = derived(
    messageCount,
    $count => $count > 0
);

/**
 * The most recent message in the conversation
 * Returns null if no messages exist
 */
export const latestMessage = derived(
    conversationStore,
    $conversation => {
        const messages = $conversation.messageArray;
        return messages.length > 0 ? messages[messages.length - 1] : null;
    }
);

/**
 * Only user messages from the conversation
 * Useful for analytics or display purposes
 */
export const userMessages = derived(
    conversationStore,
    $conversation => $conversation.messageArray.filter(msg => msg.role === 'user')
);

/**
 * Only assistant messages from the conversation
 * Useful for analytics or display purposes
 */
export const assistantMessages = derived(
    conversationStore,
    $conversation => $conversation.messageArray.filter(msg => msg.role === 'assistant')
);

/**
 * Messages that are currently streaming (status === 'streaming')
 * Usually will be 0 or 1 messages
 */
export const streamingMessages = derived(
    conversationStore,
    $conversation => $conversation.messageArray.filter(msg => msg.status === 'streaming')
);

/**
 * Whether any message is currently streaming
 * Useful for showing global loading states
 */
export const isStreaming = derived(
    streamingMessages,
    $streamingMessages => $streamingMessages.length > 0
);

/**
 * The currently streaming message (if any)
 * Returns null if no message is streaming
 */
export const currentStreamingMessage = derived(
    conversationStore,
    $conversation => {
        if (!$conversation.latestMessageID) return null;
        return $conversation.messageArray.find(
            msg => msg.messageID === $conversation.latestMessageID
        ) || null;
    }
);

// Runtime-related derived stores

/**
 * Whether we're connected to a runtime and ready to send messages
 * Combines runtime existence and connection status
 */
export const canSendMessage = derived(
    [conversationStore, runtimeStore],
    ([$conversation, $runtime]) => {
        return !$conversation.assistantLoading && 
               $runtime.currentRuntime !== null && 
               $runtime.isConnected;
    }
);

/**
 * Whether the current runtime supports streaming
 * Used to show/hide streaming-related UI elements
 */
export const supportsStreaming = derived(
    runtimeStore,
    $runtime => $runtime.capabilities.supportsStreaming
);

/**
 * Whether the current runtime supports file attachments
 * Used to show/hide file upload buttons
 */
export const supportsAttachments = derived(
    runtimeStore,
    $runtime => $runtime.capabilities.supportsAttachments
);

/**
 * Maximum token limit for the current runtime
 * Used for input validation and warnings
 */
export const maxTokens = derived(
    runtimeStore,
    $runtime => $runtime.capabilities.maxTokens || 4096
);

/**
 * Name/identifier of the current runtime
 * Useful for displaying which AI provider is active
 */
export const runtimeName = derived(
    runtimeStore,
    $runtime => $runtime.currentRuntime?.constructor?.name || 'No Runtime'
);

// UI-related derived stores

/**
 * Whether to show the scroll-to-bottom button
 * Combines scroll position and message presence
 */
export const shouldShowScrollButton = derived(
    [uiStore, hasMessages],
    ([$ui, $hasMessages]) => {
        return $hasMessages && !$ui.isScrolledToBottom && $ui.showScrollToBottom;
    }
);

/**
 * Whether the composer input has content
 * Useful for enabling/disabling send buttons
 */
export const hasComposerContent = derived(
    uiStore,
    $ui => $ui.composorValue.trim().length > 0
);

/**
 * Whether the send button should be enabled
 * Combines multiple conditions for sending messages
 */
export const canSend = derived(
    [canSendMessage, hasComposerContent, isStreaming],
    ([$canSendMessage, $hasComposerContent, $isStreaming]) => {
        return $canSendMessage && $hasComposerContent && !$isStreaming;
    }
);

// Complex derived stores that combine multiple sources

/**
 * Current conversation state summary
 * Useful for debugging or status displays
 */
export const conversationSummary = derived(
    [conversationStore, messageCount, isStreaming],
    ([$conversation, $messageCount, $isStreaming]) => ({
        id: $conversation.conversationID,
        messageCount: $messageCount,
        isLoading: $conversation.assistantLoading,
        isStreaming: $isStreaming,
        hasError: $conversation.error !== null,
        lastUpdated: $conversation.metadata.updatedAt
    })
);

/**
 * Runtime status summary
 * Useful for status bars or debugging
 */
export const runtimeSummary = derived(
    [runtimeStore, canSendMessage],
    ([$runtime, $canSendMessage]) => ({
        hasRuntime: $runtime.currentRuntime !== null,
        isConnected: $runtime.isConnected,
        canSend: $canSendMessage,
        capabilities: $runtime.capabilities,
        name: $runtime.currentRuntime?.constructor?.name || null
    })
);

/**
 * Overall application state
 * High-level summary for status monitoring
 */
export const appState = derived(
    [conversationSummary, runtimeSummary, uiStore],
    ([$conversation, $runtime, $ui]) => ({
        conversation: $conversation,
        runtime: $runtime,
        ui: {
            scrolledToBottom: $ui.isScrolledToBottom,
            hasInput: $ui.composorValue.length > 0,
            selectedMessage: $ui.selectedMessageID
        },
        ready: $runtime.canSend && !$conversation.isLoading
    })
);

// Export all derived stores as a convenient bundle
export const derivedStores = {
    // Message stores
    messageCount,
    hasMessages,
    latestMessage,
    userMessages,
    assistantMessages,
    streamingMessages,
    isStreaming,
    currentStreamingMessage,
    
    // Runtime stores
    canSendMessage,
    supportsStreaming,
    supportsAttachments,
    maxTokens,
    runtimeName,
    
    // UI stores
    shouldShowScrollButton,
    hasComposerContent,
    canSend,
    
    // Summary stores
    conversationSummary,
    runtimeSummary,
    appState
};
