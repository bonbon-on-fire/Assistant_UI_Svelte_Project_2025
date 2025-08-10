import { writable } from "svelte/store";

const initialState = {
    conversationID: null,
    messageArray: [],
    assistantLoading: false,
    latestMessageID: null,
    error: null,
    metadata: {
        title: null,
        createdAt: null,
        updatedAt: null,
    }
}

const { subscribe, set, update } = writable(initialState);

function setMessageID() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const id = `${timestamp}-${randomNum}`;

    return id;
}

function validateMessage(messageData) {
    if (!messageData || typeof messageData !== "object") {
        throw new Error("ERROR: Message must be a non-empty object");
    }

    if (!messageData.content || typeof messageData.content !== "string") {
        throw new Error("ERROR: Message must have content as a string");
    }

    const validRoles = ["user", "assistant", "system"];
    if(!messageData.role || !validRoles.includes(messageData.role)) {
        throw new Error("ERROR: Message must have a valid role");
    }

    return true;
}

function createMessage(messageData) {
    validateMessage(messageData);

    return {
        messageID: messageData.id || setMessageID(),
        role: messageData.role,
        content: messageData.content,
        timestamp: messageData.timestamp || Date.now(),
        status: messageData.status || "complete",
        metadata: {
            tokens: messageData.metadata?.tokens || 0,
            model: messageData.metadata?.model || "unknown",
            processingTime: messageData.metadata?.processingTime || 0
        }
    };
}

export function addMessage(messageData) {
    try {
        const newMessage = createMessage(messageData);

        update(state => {
            const newState = {
                ...state,
                messageArray: [...state.messageArray, newMessage],
                metadata: {
                    ...state.metadata,
                    updatedAt: messageData.timestamp || Date.now()
                }
            };

            if (state.messageArray.length === 0) {
                newState.metadata.createdAt = newMessage.timestamp || Date.now();
                newState.conversationID = setMessageID();
            }

            return newState;
        });

        return newMessage.messageID;
    } catch (error) {
        throw new Error("ERROR: Failed to add message", error);
    }
}

export function updateMessage(messageID, updates) {
    update(state => {
        const messageIdx = state.messageArray.findIndex(message => message.messageID === messageID);

        if (messageIdx === -1) {
            throw new Error("ERROR: Message not found");
        }

        const currentMessage = state.messageArray[messageIdx];

        const updatedMessage = {
            ...currentMessage,
            ...updates,
            timestamp: updates.timestamp || Date.now(),
            metadata: {
                ...currentMessage.metadata,
                ...updates.metadata
            }
        }

        const newMessageArray = [...state.messageArray];
        newMessageArray[messageIdx] = updatedMessage;

        return {
            ...state,
            messageArray: newMessageArray,
            metadata: {
                ...state.metadata,
                updatedAt: updatedMessage.timestamp || Date.now()
            }
        };
    });
}

export function removeMessage(messageID) {
    update(state => ({
        ...state,
        messageArray: state.messageArray.filter(message => message.messageID !== messageID),
        metadata: {
            ...state.metadata,
            updatedAt: Date.now()
        }
    }));
}

export function clearConversation() {
    set(initialState);
}

export function setLoading(isLoading) {
    update(state => ({
        ...state,
        assistantLoading: Boolean(isLoading)  // Ensure it's always a boolean
    }));
}

export function setError(error) {
    update(state => ({
        ...state,
        error: error  // Can be null, string, or Error object
    }));
}

export function setLatestMessageID(messageID) {
    update(state => ({
        ...state,
        latestMessageID: messageID  // null to clear, string ID to set
    }));
}

export function updateMetadata(updates) {
    update(state => ({
        ...state,
        metadata: {
            ...state.metadata,
            ...updates,
            updatedAt: Date.now()  // Always update the modification time
        }
    }));
}

export function getMessageById(messageID) {
    let foundMessage = null;
    
    // Use subscribe to get current state, then immediately unsubscribe
    const unsubscribe = subscribe(state => {
        foundMessage = state.messageArray.find(message => message.messageID === messageID) || null;
    });
    unsubscribe();  // Clean up subscription immediately
    
    return foundMessage;
}

export function getLatestMessage() {
    let latestMessage = null;
    
    const unsubscribe = subscribe(state => {
        latestMessage = state.messageArray.length > 0 
            ? state.messageArray[state.messageArray.length - 1] 
            : null;
    });
    unsubscribe();
    
    return latestMessage;
}

export function getMessageCount() {
    let count = 0;
    
    const unsubscribe = subscribe(state => {
        count = state.messageArray.length;
    });
    unsubscribe();
    
    return count;
}

// Export the store subscription so components can react to changes
// This is what components will use with the $ reactive syntax
export const conversationStore = {
    subscribe  // Only expose subscribe, not set/update to prevent direct mutation
};

// Export all the methods so they can be imported individually
// This gives consumers fine-grained control over what they import
export default {
    // Store subscription
    subscribe,
    
    // State modification methods
    addMessage,
    updateMessage,
    removeMessage,
    clearConversation,
    setLoading,
    setError,
    setLatestMessageID,
    updateMetadata,
    
    // Utility methods
    getMessageById,
    getLatestMessage,
    getMessageCount
};