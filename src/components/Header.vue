<script setup>

import {useStore} from "@/stores/store.js";

const store = useStore();
const searchText = ref("");
const foundStore = ref([]);
const isSearching = ref(false);
const getProjects = () => {

  foundStore.value = store.getAndFoundProjects(searchText.value)
  console.log(foundStore.value)


};
import Button from "@/components/BaseComponents/Button/Button.vue";
import {ref} from "vue";
import Input from "@/components/Input.vue";
</script>

<template>
  <div class="header">
      <div class="form-group">
        <Input class="form-control" type="text" :placeholderText v-model="searchText"/>
        <Button class="searchButton" :disabled="isSearching" @click="getProjects">
          <template #buttonContent>
            <img v-if="!isSearching" src="../../public/Rectangle%2017.png" class="searchButtonIcon" alt="search">
          </template>
        </Button>
      </div>

    </div>
</template>

<style scoped>
.header {
  display: inline-flex;
  width: 100%;
}
</style>