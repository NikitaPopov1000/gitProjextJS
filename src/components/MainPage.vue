
<template>
  <div>
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
    <div class="main">
      <template v-if="isSearching">
        <p class="searchText">Поиск проекта...</p>
      </template>
      <template v-else>
        <Card v-for="item in store.foundStore" :key="item.id"
              :title="item.name"
              :image="item.owner ? item.owner.avatar_url : ''"
              :author="item.owner.login"
              :stars="item.forks_count"
              :views="item.watchers_count"
        />
      </template>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import Button from "@/components/BaseComponents/Button/Button.vue";
import Card from "../components/BaseComponents/Cards/Card.vue";
import { useStore } from "../stores/store.js";

const store = useStore();
const searchText = ref("");
const foundStore = ref([]);
const isSearching = ref(false);

const getProjects = () => {
  isSearching.value = true;
  store.getAndFoundProjects(searchText.value)
      .then((projects) => {
        foundStore.value = projects;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        isSearching.value = false;
      });
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.searchButtonIcon {
  width: 51px;
  height: 41px;
  margin: 14px;


}

.form-control {
  width: 1376px;
  height: 68px;
}


.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DDDDDD;
  padding-bottom: 47px;
  padding-top: 32px;
  width: 100%;

}

.searchButton:hover {
  background: antiquewhite;
}

.searchButton:active {
  background: blue;
}

.container {
  margin: 0 25px;
}

::placeholder {
  font-family: "Roboto Regular", serif;
  padding-left: 3%;
  font-size: 14px;
  line-height: 16px;
}

.main {
  margin-top: 34px;
  margin-left: 39px;
  margin-right: 39px;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 28px;

}

 .searchText {
   text-align: center;
   font-size: 24px;
   padding-top: 100px;
 }
</style>

