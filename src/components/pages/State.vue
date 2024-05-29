<script setup>

</script>
<template>
  <div class="general">
    <div class="container_block">
      <div class="main_block">
        <div class="main_block_inner">
          <span>Добро пожаловать на страницу Don't Starve</span>
        </div>
        <p class="more">Don’t Starve — инди-игра, разработанная и изданная канадской независимой
          студией Klei Entertainment в 2013 году. Является одиночной игрой в жанре выживания,
          с возможностью прохождения сюжетного режима.</p>
        <div class="update">
          <div class="meta_update">
            <img alt="#" src="/src/assets/image/Scrappy.webp"/>
          </div>
          <div class="mini_block">
            <div>
<!--              <img  alt="#"/>-->
              <p>Wiki</p>
            </div>
            <div>
<!--              <img  alt="#"/>-->
              <p>Translate</p>
            </div>
            <div>
<!--              <img  alt="#"/>-->
              <p>Helper</p>
            </div>
            <div>
<!--              <img  alt="#"/>-->
              <p>Search</p>
            </div>
          </div>
        </div>
        <span class="survive">Не голодайте вместе</span>
        <div class="content_main">
          <div class="content">
            <p>Don't Starve Together — это автономное многопользовательское расширение бескомпромиссной игры на выживание в дикой природе Don't Starve.
            </p>
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
            <router-link class="link" to="/about">Подробнее</router-link>
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
.mini_block{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.general{
  padding: 60px;
}
.container_block {
  border-radius: 20px;
  margin: 0 auto;
  width: 88%;
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
  p{
    color: lightgray;
  }
}
.more{
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  width: 75%;
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
  gap: 60px;
  width: 88%;
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.content p:not(:first-child){
  margin-top: 20px;
}
.meta_update img{
  width: 100%;
}
img{
  border-radius: 20px;
}
.content_main{
  display: grid;
  grid-template-columns: 2.4fr 1fr;
}
.content{
  text-align: center;
  width: 80%;
  margin: 0  auto;
}
.general_main {
  background: darkgray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .link{
    display: flex;
    justify-content: center;
    align-items: center;
    border:solid 2px black;
    border-radius: 0 0 20px 20px;
    height: 20%;
    background: #a8a1a1;
    text-decoration: none;
    color: darkslategrey;
  }
}
.survive{
  color: rgb(255, 247, 98);
  padding: 18px;
}
.img_main {
  background: url("/src/assets/image/reign.jpg") no-repeat center center;
  background-size: cover;
  border-radius: 20px 20px 0 0;
  height: 50%;
}
.mini_block div{
  background: lavenderblush;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>