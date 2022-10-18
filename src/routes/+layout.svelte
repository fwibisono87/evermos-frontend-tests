<div class="main">
    dor
    <slot />
</div>

<style type="text/postcss" lang="scss">
    /* @apply "../lib/styles/main.scss" as *; */
    .main {
        background-color: $primary;
        width: 100vw;
        min-height: 100vw;
        margin: 0;
    }
</style>