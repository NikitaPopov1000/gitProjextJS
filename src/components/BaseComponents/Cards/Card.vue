<template>
<div class="Card">
<div class="cardGit">{{ props.title }}</div>
  <div class="card-body">

    <div class="cardBody">
      <img :src=props.image alt="logo" class="LogoCard">
      {{props.author}}
      </div>

      <div class="StarsAbdViews">
        <img src="../../../../public/Rectangle%205.png" alt="stars" class="stars">
        <p>{{props.stars}}</p>
        <img src="../../../../public/Rectangle%207.png" alt="views" class="views">
        {{props.views}}
      </div>
      </div>
    <div class="cardFooter">
      <input type="text" class="writeComments">
      <button class="SendComments"></button>
    </div>
</div>
</template>

<script setup>
const props = defineProps( {

    title: {
      type: String,
      default: "Название проекта"
    },
    author: {
      type: String,
      default: "Автор",
    },
    stars: {
      type: Number,
      default: 1,
    },
    views: {
      type: Number,
      default: 1,
    },
  image: {
      type: String,
      default: "../../../../public/b51b78ecc9e5711274931774e433b5e6.jpg",
    },
})


</script>

<style>
.StarsAbdViews {
  display: flex;
  align-items: center;
  column-gap: 19px;
  margin-left: 15px;
}

.LogoCard {
  width: 50px;
  height: 50px;
}

.cardBody {
  margin-left: 15px;
  margin-top: 18px;
  margin-bottom: 11px;
  display: flex;
  column-gap: 27px;
  align-items: center;
}

.Card {
  border: 1px solid #A2A3A4;
  width: 440px;
  height: 218px;
  margin-top: 23px;
}

.cardGit {
  font-family: "Roboto Regular", sans-serif;
  margin-top: 7px;
  margin-left: 15px;
}

.SendComments {
  width: 63px;
  height: 54px;
  background-color: #00A3FF;
  background-image: url("../../../../public/Rectangle 8.png");
  background-repeat: no-repeat;
  background-position: center;
  border: none;
}

.writeComments {
  width: 360px;
  height: 54px;
}

.cardFooter {
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 16px;

}
</style>