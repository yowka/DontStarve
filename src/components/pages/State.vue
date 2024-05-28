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
            <a href="#"><img alt="#" src="/src/assets/image/dont-starve-shipwrecked.jpg"/></a>
          </div>
          <div class="mini_block">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <span>Не голодайте вместе</span>
        <div class="content_main">
          <div class="content">
            <p>Don't Starve Together — это автономное многопользовательское расширение бескомпромиссной игры на выживание в дикой природе Don't Starve.
              Теперь включая Reign of Giants; добавление новых персонажей, времен года, существ, биомов и новых гигантских испытаний в Don't Starve Together.</p>
            <p>Войдите в странный и неизведанный мир, полный странных существ, опасностей и сюрпризов. Собирайте ресурсы для создания предметов и построек,
              соответствующих вашему стилю выживания. Играйте по-своему, разгадывая тайны этой странной земли.
            </p>
            <p>Сотрудничайте с друзьями в приватной игре или рискните с незнакомцами в Интернете. Работайте вместе с другими игроками, чтобы выжить в суровых условиях,
              или действуйте самостоятельно. Делайте все возможное, но самое главное – не голодайте.
            </p>
          </div>
          <div class="general_main">
            <div class="img_main">

            </div>
            <button><a href="#">ываываыва</a></button>
          </div>
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
.content p{
  margin-top: 20px;
}
.meta_update img{
  width: 98%;
}
img{
  border-radius: 20px;
}
.content_main{
  display: grid;
  grid-template-columns: 1.4fr 1fr;
}
.general_main{
  background: darkgray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.general_main a{
  text-decoration: none;
  color: black;
  border: none;
}
.img_main{
  background: url("/src/assets/image/reign.webp") no-repeat center center;
  background-size: cover;
  border-radius: 20px 20px 0 0;
  height: 50%;
}
</style>