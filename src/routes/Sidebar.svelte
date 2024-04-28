<script>
    import { _ } from 'svelte-i18n';
</script>

<div class="sidebar">
    <div class="sort">
        <button class="btn btn-outline btn-secondary">最新上傳</button>
        <button class="btn btn-outline btn-secondary">最多投票</button>
        <button class="btn btn-outline btn-secondary">最多下載</button>
    </div>
    <div class="tags">
        <button class="btn">Normal</button>
        <button class="btn">Normal</button>
        <button class="btn">Normal</button>
        <button class="btn">Normal</button>
        <button class="btn">Normal</button>
        <button class="btn">Normal</button>
    </div>
</div>

<style>
    .sidebar {
        width: 200px;
        overflow-y: scroll;
    }
    .sort {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .tags {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>