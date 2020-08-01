<template>
    <div class="message">
        <slot></slot>
        <button
            @click="$emit('closeElement')"
        >
            OK
        </button>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.message {
    display: flex;
    max-width: 400px;
    height: 200px;
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 30px 50px;
    border: solid 2px $main-color;
    background: $background-color;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    button {
        width: 100%;
        padding: 8px 10px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        border: none;
        margin-top: 10px;
        background: $main-color;
        color: $background-color;
        border-radius: 3px;
        cursor: pointer;
        outline: none;
        &:hover {
            background: $btn-back-color;
        }
    }
}
</style>