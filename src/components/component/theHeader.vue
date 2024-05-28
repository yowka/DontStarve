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
          <router-link class="link3" to="/register"><button>Войти</button></router-link>
          <router-link class="link" to="/register"><button>Регистрация</button></router-link>
        </div>
      </div>
  </div>
</template>

<style scoped>
.head{
  margin: 0 auto;
  background: #7d5e5e;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;

}
.link,.link3{
  color: #3C0D2A;
  font-size: 40px;
  text-decoration: none;
}
.link3{
  margin-right: 30px;
}
.logo{
  width: 240px;
  height: 200px;
  background: url("/src/assets/image/logotype.png") no-repeat center center;
  background-size: cover;
}
.link button,.link3 button{
  font-size: 30px;
  background: rgb(256,256,256,0.4);
  border-radius: 5px;
}
</style>