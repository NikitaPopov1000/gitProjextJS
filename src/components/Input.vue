<template>
<input type="text" :placeholderText="props.placeholder" v-model="inputText" @input="inputTextEvent">
</template>


<script setup>
import {ref} from "vue";
const emit = defineEmits(['inputTextEmit']);
const props = defineProps({
  placeholder: {
    type: String,
    default: "nikita-css-placeholder",
  }

})

const inputText = ref("")

const inputTextEvent = (event) => {
  const value = event.target.value
  inputText.value = value
  emit('inputTextEmit', value)
}

</script>




})

<style scoped>

</style>