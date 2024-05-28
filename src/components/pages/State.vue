<script setup>

</script>
<template>
  <div class="general">
    <div class="container_block">
      <div class="main_block">
        <div class="main_block_inner">
          <p>Добро пожаловать на страницу Don't Starve</p>
        </div>
        <p>practise</p>
        <div class="update">
          <div class="meta_update">
            <img alt="#" src="/src/assets/image/dont-starve-shipwrecked.jpg"/>
          </div>
          <div>asfdad</div>
        </div>
      </div>
      <aside class="aside_block">
        <img alt="#" src="/src/assets/image/trailer.jpg"/>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.general{
  padding: 60px;
}
.container_block {
  border-radius: 20px;
  margin: 0 auto;
  width: 88%;
  height: 1920px;
  background: rgb(234, 222, 200 ,0.9);
  grid-template-columns: 3fr 1fr;
  display: grid;
  justify-items: center;
  align-items: center;
}
.main_block,.aside_block{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 98%;
  border-radius: 20px;
  background: rgba(44, 44, 44, 0.84);
}
.main_block{
  width: 96%;
}
.aside_block{
  width: 90%;
}
.main_block_inner {
  width: 90%;
  background: white;
  border-radius: 20px;
  padding: 16px;
  text-align: center;
}
.update{
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.meta_update img{
  width: 98%;
}
</style>