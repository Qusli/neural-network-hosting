<script setup lang='ts'>
interface Props {
    title: string
}

defineProps<Props>()
</script>

<template>
    <section :class="$s.container">
        <div :class="$s.container__header">
            <h1>{{ title }}</h1>
            <slot name="header-controls"></slot>
        </div>
        <div :class="$s.container__body">
            <slot></slot>
        </div>
    </section>
</template>

<style lang='scss' module='$s'>
.container {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__body {
        width: 100%;
    }
}
</style>