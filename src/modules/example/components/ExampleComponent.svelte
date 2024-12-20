<script lang="ts">
    import { ExampleModel } from "../ExampleModel.svelte";
    let count = $state(0);
    let model = new ExampleModel();
</script>

<div>
    <h1 class="text-3xl">Example Component</h1>
    <h2>Local State</h2>
    {count}
    <button onclick={() => count++}>+</button>
    <h2>Model State</h2>
    {model.count}
    <button onclick={() => model.increment()}>+</button>
</div>
