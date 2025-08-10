import { writable } from 'svelte/store';

const initialState = {
    isScrolledToBottom: true,     // Whether chat is scrolled to bottom
    showScrollToBottom: false,    // Whether to show scroll button
    selectedMessageID: null,      // Currently selected/highlighted message
    composerValue: "",            // Current text in input field
    theme: 'light',              // UI theme
    sidebarOpen: false           // Whether sidebar is open
};

const { subscribe, set, update } = writable(initialState);

// Method to update scroll position
export function setScrolledToBottom(isScrolled) {
    update(state => ({
        ...state,
        isScrolledToBottom: Boolean(isScrolled)
    }));
}

// Method to control scroll button visibility
export function setShowScrollButton(show) {
    update(state => ({
        ...state,
        showScrollToBottom: Boolean(show)
    }));
}

// Method to set selected message
export function setSelectedMessage(messageID) {
    update(state => ({
        ...state,
        selectedMessageID: messageID
    }));
}

// Method to update composer input value
export function setComposerValue(value) {
    update(state => ({
        ...state,
        composerValue: value || ""
    }));
}

// Method to update theme
export function setTheme(theme) {
    const validThemes = ['light', 'dark', 'auto'];
    if (!validThemes.includes(theme)) {
        console.warn(`Invalid theme: ${theme}. Using 'light' instead.`);
        theme = 'light';
    }
    
    update(state => ({
        ...state,
        theme
    }));
}

// Method to toggle sidebar
export function toggleSidebar() {
    update(state => ({
        ...state,
        sidebarOpen: !state.sidebarOpen
    }));
}

// Method to clear UI state
export function clearUIState() {
    set(initialState);
}

// Export the store subscription
export const uiStore = {
    subscribe
};

// Export all methods
export default {
    subscribe,
    setScrolledToBottom,
    setShowScrollButton,
    setSelectedMessage,
    setComposerValue,
    setTheme,
    toggleSidebar,
    clearUIState
};