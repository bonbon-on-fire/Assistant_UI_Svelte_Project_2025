<script lang="ts">
    type Message = { role: 'user' | 'assistant'; text: string };

    let messages = $state<Message[]>([]);
    let inputText = $state('');

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        const text = inputText.trim();
        if (!text) return;
        messages = [...messages, { role: 'user', text }];
        inputText = ''

        setTimeout(() => {
            messages = [...messages, { role: 'assistant', text: `You said: ${text}` }];
        }, 400);;
    }
</script>

<div class="app">
    <section class="messages" aria-live="polite">
        {#if messages.length === 0}
            <p>No messages yet. Say hello!</p>
        {/if}

        {#each messages as m, i (i)}
            <div class={m.role === 'user' ? 'msg user' : 'msg assistant'}>{m.text}</div>
        {/each}
    </section>

    <form class="composer" onsubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Type a message..."
            bind:value={inputText}
            autocomplete="off"
            aria-label="Message input"
        />
        <button type="submit" aria-label="Send message">Send</button>
    </form>
</div>