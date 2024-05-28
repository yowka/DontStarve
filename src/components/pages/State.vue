<script setup>

</script>
<template>
  <div class="general">
    <div class="container_block">
      <div class="main_block">
        fdghdfh
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
</style>