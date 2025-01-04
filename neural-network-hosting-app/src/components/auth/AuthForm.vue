<template>
    <form :class="$s['auth-form']">
        <div v-if="$slots.header" :class="[$s['auth-form__header'], 'auth-form__header']">
            <slot name="header"></slot>
        </div>
        <fieldset v-if="$slots.inputs" :class="[$s['auth-form__inputs'], 'auth-form__inputs']">
            <slot name="inputs"></slot>
        </fieldset>
        <div v-if="$slots.buttons" :class="[$s['auth-form__buttons'], 'auth-form__buttons']">
            <slot name="buttons"></slot>
        </div>
    </form>
</template>

<style lang='scss' module='$s'>
.auth-form {
    $padding-aside: 45px;

    $min-width: calc(280px - $padding-aside * 2);
    $width: calc(590px - $padding-aside * 2);
    $max-width: calc(600px - $padding-aside * 2);

    width: clamp($min-width, $width, $max-width);

    display: flex;
    flex-direction: column;
    gap: 50px;

    padding: 35px 45px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;

    background-color: $component-background-color;

    &__header {
        display: flex;
        justify-content: center;
    }

    &__inputs,
    &__buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
</style>