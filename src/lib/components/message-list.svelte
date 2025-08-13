<script lang="ts">
  type Message = { role: "user" | "assistant"; text: string };
  let { messages } = $props<{ messages: Message[] }>();
  let container: HTMLElement | null = null;

  $effect(() => {
    messages;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  });
</script>

<section class="messages" aria-live="polite" bind:this={container}>
  {#if messages.length === 0}
    <p>No messages yet. Say hello!</p>
  {/if}

  {#each messages as m, i (i)}
    <div class={m.role === "user" ? "msg user" : "msg assistant"}>{m.text}</div>
  {/each}
</section>
