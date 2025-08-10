<script lang="ts">
	import { onMount } from 'svelte';
	
	let mounted = $state(false);
	
	onMount(() => {
		mounted = true;
	});
</script>

<main>
	<h1>Welcome to Svelte v5 Learning!</h1>
	
	{#if mounted}
		<div class="welcome-card">
			<h2>🎉 Your Svelte v5 Project is Ready!</h2>
			<p>This is your starting point for learning Svelte v5 step by step.</p>
			
			<div class="features">
				<h3>What's Set Up:</h3>
				<ul>
					<li>✅ Svelte v5 with TypeScript</li>
					<li>✅ SvelteKit for routing and building</li>
					<li>✅ Development server running</li>
					<li>✅ Hot module reloading</li>
				</ul>
			</div>
			
			<div class="next-steps">
				<h3>Next Steps:</h3>
				<ol>
					<li>Explore the project structure</li>
					<li>Learn about Svelte v5 runes ($state, $derived, $effect)</li>
					<li>Create your first custom component</li>
					<li>Start building the assistant UI</li>
				</ol>
			</div>
		</div>
	{/if}
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
	}

	h1 {
		color: #ff3e00;
		text-align: center;
		margin-bottom: 2rem;
		font-size: 2.5rem;
	}

	.welcome-card {
		background: linear-gradient(145deg, #ffffff, #f8f9fa);
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #e9ecef;
	}

	.welcome-card h2 {
		color: #2d3748;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.welcome-card p {
		color: #4a5568;
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
	}

	.features, .next-steps {
		margin-bottom: 1.5rem;
	}

	.features h3, .next-steps h3 {
		color: #2d3748;
		margin-bottom: 0.5rem;
		font-size: 1.2rem;
	}

	ul, ol {
		color: #4a5568;
		padding-left: 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		main {
			padding: 1rem;
		}
		
		h1 {
			font-size: 2rem;
		}
		
		.welcome-card {
			padding: 1.5rem;
		}
	}
</style>