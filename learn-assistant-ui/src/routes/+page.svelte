<script lang="ts">
  import MessageList from "$lib/components/message-list.svelte";

  type Message = { role: "user" | "assistant"; text: string };

  let messages = $state<Message[]>([]);
  let inputText = $state("");

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const text = inputText.trim();
    if (!text) return;
    messages = [...messages, { role: "user", text }];
    inputText = "";

    setTimeout(() => {
      messages = [
        ...messages,
        { role: "assistant", text: `You said: ${text}` },
      ];
    }, 400);
  }
</script>

<div class="app">
  {#if messages.length === 0}
    <section class="empty">
      <h1>Ready when you are.</h1>
      <form class="composer" onsubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask anything"
          bind:value={inputText}
          autocomplete="off"
          aria-label="Message input"
        />

        <button
          type="submit"
          aria-label="Send message"
          disabled={!inputText.trim()}>Send</button
        >
      </form>
    </section>
  {:else}
    <MessageList {messages} />

    <form class="composer" onsubmit={handleSubmit}>
      <!-- should be onsubmit not on:submit -->
      <input
        type="text"
        placeholder="Type a message..."
        bind:value={inputText}
        autocomplete="off"
        aria-label="Message input"
      />

      <button
        type="submit"
        aria-label="Send message"
        disabled={!inputText.trim()}>Send</button
      >
    </form>
  {/if}
</div>
