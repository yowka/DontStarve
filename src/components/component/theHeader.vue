<script setup>

</script>

<template>
  <div class="general">
      <div class="head">
        <div class="general_logo">
        <router-link class="link" to="/"><div class="logo"></div></router-link>
        </div>
        <div>
          <router-link class="link" to="/about">Подробнее</router-link>
        </div>
        <div>
          <button class="buy"><a href="https://store.steampowered.com/app/322330/Dont_Starve_Together/?l=russian" target="_blank">Купить игру</a></button>
        </div>
      </div>
  </div>
</template>

<style scoped>
.head{
  margin: 0 auto;
  background: #7d5e5e;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;

}
.link,.buy a{
  color: #3C0D2A;
  font-size: 40px;
  text-decoration: none;
}
.buy{
  margin-right: 30px;
  a{
    padding: 20px;
  }
}
.logo{
  width: 240px;
  height: 120px;
  background: url("/src/assets/image/logotype.png") no-repeat center center;
  background-size: cover;
}
.buy{
  font-size: 30px;
  background: rgb(256,256,256,0.4);
  border-radius: 5px;
}
</style>