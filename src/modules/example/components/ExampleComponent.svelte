<script lang="ts">
    let { prop } = $props();
    let count = $state(0);
</script>

<div>
    <h1>Example Component</h1>
    {count}
    <button onclick={() => count++}>+</button>
</div>
