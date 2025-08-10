// assistant.js - Context system for providing stores to components
// This allows any component in the tree to access stores without prop drilling

import { setContext, getContext } from 'svelte';

// Context key - unique identifier for our assistant context
const ASSISTANT_CONTEXT_KEY = 'assistant-runtime';

/**
 * Sets up the assistant context with all necessary stores and utilities
 * Call this in your root component or provider component
 * 
 * @param {Object} context - Object containing all stores and utilities
 * @param {Object} context.conversationStore - The conversation store
 * @param {Object} context.runtimeStore - The runtime store  
 * @param {Object} context.uiStore - The UI state store
 * @param {Object} context.derivedStores - All derived/computed stores
 * @param {Object} context.actions - Bound action functions
 */
export function setAssistantContext(context) {
    if (!context) {
        throw new Error('Assistant context cannot be null or undefined');
    }
    
    // Validate required stores are provided
    const requiredStores = ['conversationStore', 'runtimeStore', 'uiStore'];
    for (const storeName of requiredStores) {
        if (!context[storeName]) {
            throw new Error(`Missing required store: ${storeName}`);
        }
    }
    
    setContext(ASSISTANT_CONTEXT_KEY, context);
}

/**
 * Gets the assistant context from the component tree
 * Throws an error if context is not found (helps catch setup mistakes)
 * 
 * @returns {Object} The assistant context with all stores and utilities
 */
export function getAssistantContext() {
    const context = getContext(ASSISTANT_CONTEXT_KEY);
    
    if (!context) {
        throw new Error(
            'Assistant context not found. Make sure to wrap your components with AssistantProvider ' +
            'or call setAssistantContext() in a parent component.'
        );
    }
    
    return context;
}

/**
 * Hook-style function to get just the conversation store
 * Convenience function for components that only need conversation data
 * 
 * @returns {Object} The conversation store
 */
export function useConversationStore() {
    const context = getAssistantContext();
    return context.conversationStore;
}

/**
 * Hook-style function to get just the runtime store
 * Convenience function for components that only need runtime info
 * 
 * @returns {Object} The runtime store
 */
export function useRuntimeStore() {
    const context = getAssistantContext();
    return context.runtimeStore;
}

/**
 * Hook-style function to get just the UI store
 * Convenience function for components that only need UI state
 * 
 * @returns {Object} The UI store
 */
export function useUIStore() {
    const context = getAssistantContext();
    return context.uiStore;
}

/**
 * Hook-style function to get derived/computed stores
 * Convenience function for components that need computed values
 * 
 * @returns {Object} Object containing all derived stores
 */
export function useDerivedStores() {
    const context = getAssistantContext();
    return context.derivedStores || {};
}

/**
 * Hook-style function to get action functions
 * Convenience function for components that need to trigger actions
 * 
 * @returns {Object} Object containing all bound action functions
 */
export function useActions() {
    const context = getAssistantContext();
    return context.actions || {};
}

/**
 * Hook-style function to get everything at once
 * Use when you need access to multiple parts of the context
 * 
 * @returns {Object} The complete assistant context
 */
export function useAssistant() {
    return getAssistantContext();
}

/**
 * Utility function to check if assistant context is available
 * Useful for components that might be used outside of assistant context
 * 
 * @returns {boolean} True if context is available, false otherwise
 */
export function hasAssistantContext() {
    try {
        getAssistantContext();
        return true;
    } catch {
        return false;
    }
}
