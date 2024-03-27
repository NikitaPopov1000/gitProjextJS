<template>
  <button
      class="button"
      @click="clickAction"
  >
    <slot name="buttonContent">
      {{ props.buttonName }}
    </slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  buttonName: {
    type: String,
    default: "",
  }
})

function clickAction() {
  // Код, который будет выполняться при клике на кнопку
  // Можете оставить пустым, если не нужно выполнять какое-либо действие
}
</script>

<style>
.button {
  background: #00A3FF;
  border: none;
  position: absolute;
}
</style>
