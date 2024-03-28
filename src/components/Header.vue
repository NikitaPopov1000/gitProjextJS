<script setup>

import {useStore} from "@/stores/store.js";

const store = useStore();
const searchText = ref("");
const foundStore = ref([]);
const isSearching = ref(false);
const getProjects = () => {

  foundStore.value  = store.getAndFoundProjects(searchText.value)
  console.log(foundStore.value)



};
import Button from "@/components/BaseComponents/Button/Button.vue";
import {ref} from "vue";
import Card from "@/components/BaseComponents/Cards/Card.vue";
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Введите название проекта" v-model="searchText">
        <Button class="searchButton" :disabled="isSearching" @click="getProjects">
          <template #buttonContent>
            <img v-if="!isSearching" src="../../public/Rectangle%2017.png" class="searchButtonIcon" alt="search">
          </template>
        </Button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>