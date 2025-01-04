<script setup lang='ts'>
import { reactive, useCssModule } from 'vue';

interface Props {
    buttonType?: "button" | "submit";
    type?: "default" | "primary" | "secondary";
    label: string
}

const props = withDefaults(defineProps<Props>(), {
    buttonType: "button",
    type: "default"
})

const $style = useCssModule("$s")

const classes = reactive([
    props.type === "default" ? $style['button--default'] : '',
    props.type === "primary" ? $style['button--primary'] : '',
    props.type === "secondary" ? $style['button--secondary'] : '',
    $style.button
])
</script>

<template>
    <button :type="buttonType" :class="classes">
        {{ label }}
    </button>
</template>

<style lang='scss' module='$s'>
.button {
    $transition: all 0.35s ease;

    padding: 12px 24px;
    border: 1px solid transparent;
    border-radius: $border-radius;

    box-shadow: $box-shadow;
    transition: $transition;
    -webkit-transition: $transition;
    -o-transition: $transition;

    cursor: pointer;

    &:hover {
        color: $primary-color;
        background-color: $component-background-color;
        border-color: $primary-color;
    }
}

.button--default {
    color: $text-default-color;
    background-color: $component-background-color;
    border-color: $stroke-color;
}

.button--primary {
    color: white;
    background-color: $primary-color;
}

.button--secondary {
    color: $primary-color;
    background-color: $secondary-color;
}
</style>