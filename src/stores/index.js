export { 
    conversationStore,
    addMessage,
    updateMessage,
    removeMessage,
    clearConversation,
    setLoading,
    setError,
    setLatestMessageID,
    updateMetadata,
    getMessageById,
    getLatestMessage,
    getMessageCount
} from './conversation.js';

export {
    runtimeStore,
    setRuntime,
    setConnected,
    updateRuntimeConfig,
    setModel,
    clearRuntime
} from './runtime.js';

export {
    uiStore,
    setScrolledToBottom,
    setShowScrollButton,
    setSelectedMessage,
    setComposerValue,
    setTheme,
    toggleSidebar,
    clearUIState
} from './ui.js';

// Derived stores
export {
    messageCount,
    hasMessages,
    latestMessage,
    userMessages,
    assistantMessages,
    streamingMessages,
    isStreaming,
    currentStreamingMessage,
    canSendMessage,
    supportsStreaming,
    supportsAttachments,
    maxTokens,
    runtimeName,
    shouldShowScrollButton,
    hasComposerContent,
    canSend,
    conversationSummary,
    runtimeSummary,
    appState,
    derivedStores
} from './derived.js';

// Bundle all stores for easy context setup
export const allStores = {
    conversationStore,
    runtimeStore,
    uiStore,
    derivedStores
};

// Bundle all actions for easy context setup
export const allActions = {
    // Conversation actions
    addMessage,
    updateMessage,
    removeMessage,
    clearConversation,
    setLoading,
    setError,
    setLatestMessageID,
    updateMetadata,
    
    // Runtime actions
    setRuntime,
    setConnected,
    updateRuntimeConfig,
    setModel,
    clearRuntime,
    
    // UI actions
    setScrolledToBottom,
    setShowScrollButton,
    setSelectedMessage,
    setComposerValue,
    setTheme,
    toggleSidebar,
    clearUIState,
    
    // Utility functions
    getMessageById,
    getLatestMessage,
    getMessageCount
};
