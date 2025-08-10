const runtimeStore = writable({
    model: null,
    currentRuntime: null,
    isConnected: false,
    config: {},
    capabilities: {
        supportsStreaming: false,
        supportsAttachments: false,
        maxTokens: 0,
    }
})