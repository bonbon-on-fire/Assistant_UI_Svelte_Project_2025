import { writable } from 'svelte/store';

const initialState = {
    isScrolledToBottom: true,
    showScrollToBottom: false,
    selectedMessageID: null,
    composerValue: "",
    theme: 'light',
    sidebarOpen: false
};

const { subscribe, set, update } = writable(initialState);

export function setScrolledToBottom(isScrolled) {
    update(state => ({
        ...state,
        isScrolledToBottom: Boolean(isScrolled)
    }));
}

export function setShowScrollButton(show) {
    update(state => ({
        ...state,
        showScrollToBottom: Boolean(show)
    }));
}

export function setSelectedMessage(messageID) {
    update(state => ({
        ...state,
        selectedMessageID: messageID
    }));
}

export function setComposerValue(value) {
    update(state => ({
        ...state,
        composerValue: value
    }));
}

export function setTheme(theme) {
    const validThemes = ['light', 'dark', 'auto'];
    if (!validThemes.includes(theme)) {
        console.warn(`ERROR: Invalid theme ${theme} using default 'light' instead`);
        theme = 'light';
    }
    
    update(state => ({
        ...state,
        theme
    }));
}

export function toggleSidebar() {
    update(state => ({
        ...state,
        sidebarOpen: !state.sidebarOpen
    }));
}

export function clearUIState() {
    set(initialState);
}

export const uiStore = {
    subscribe
};

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