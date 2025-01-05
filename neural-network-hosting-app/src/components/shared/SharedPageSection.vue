<script setup lang='ts'>

</script>

<template>
    <div :class="$s.section">
        <slot></slot>
    </div>
</template>

<style lang='scss' module='$s'>
.section {
    padding: 10px 15px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;

    background-color: $component-background-color;    
}
</style>