<script setup>

</script>

<template>
  <div class="general">
      <div class="header">
        <div class="general_logo">
        <router-link class="link" to="/"><img class="logo" alt="#" src="/src/assets/image/logotype.png"></router-link>
        </div>
        <div>
          <router-link class="link" to="/about">Подробнее</router-link>
        </div>
        <div>
          <router-link class="link" to="/register"><button>Войти</button></router-link>
          <router-link class="link" to="/register"><button>Регистрация</button></router-link>
        </div>
      </div>
  </div>
</template>

<style scoped>
.header{
  margin: 0 auto;
  width: 90%;
  background: darkgray;
  border-radius: 10px;
  height: 100px;
  opacity: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.logo{
  height: 100px;
}
.link{
  color: darkslategrey;
  font-size: 40px;
  text-decoration: none;
}

.link button{
  font-size: 30px;
}
</style>