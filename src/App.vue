<template>
  <div>
    <Header/>
    <div class="main">
      <MainPage />
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import MainPage from "@/components/MainPage.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>