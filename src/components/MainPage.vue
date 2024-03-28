
<template>
    <Card v-for="item in store.foundStore" :key="item.id"
          :title="item.name"
          :image="item.owner ? item.owner.avatar_url : ''"
          :author="item.owner.login"
          :stars="item.forks_count"
          :views="item.watchers_count"
    />

</template>



<script setup>

import {useStore} from '../stores/store.js'
import Card from '../components/BaseComponents/Cards/Card.vue'
const store = useStore()
console.log(store.foundStore)
</script>


<style>

</style>

