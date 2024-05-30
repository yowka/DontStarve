<script >
export default {
  data(){
    return{
      isActive :false
    }
  }
}
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
            <a href="https://dont-starve.fandom.com/ru/wiki/Don%27t_Starve_wiki" target="_blank">
              <img src="/src/assets/image/rules.webp" alt="#"/>
              <p>Википедия</p>
            </a>
            <a href="https://dont-starve.fandom.com/ru/wiki/Don%27t_Starve_%D0%B2%D0%B8%D0%BA%D0%B8:%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4" target="_blank">
              <img src="/src/assets/image/translate.webp" alt="#"/>
              <p>Переводчик</p>
            </a>
            <a href="https://dont-starve.fandom.com/ru/wiki/Don%27t_Starve_%D0%B2%D0%B8%D0%BA%D0%B8:%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F" target="_blank">
              <img src="/src/assets/image/admin.webp" alt="#"/>
              <p>Админы</p>
            </a>
            <a href="https://dont-starve.fandom.com/ru/f?catId=2862106564880237771" target="_blank">
              <img src="/src/assets/image/search.webp" alt="#"/>
              <p>Поиск игроков</p>
            </a>
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
            <p>Правление новой королевы теней пронеслось по землям Don't Starve и теперь проникает глубоко в недра земли.</p>
            <router-link class="link" to="/about">Подробнее</router-link>
          </div>
        </div>
      </div>
      <aside class="aside_block">
        <button class="play_video" @click="isActive = true">
          <img typeof="foaf:Image" src="https://www.klei.com/sites/default/files/games/dont-starve-together/assets/dont-starve-togethervideoplayimg_0.gif" width="100%" alt="">
        </button>
        <div v-if="isActive" class="video_container">
          <iframe class="video" width="560" height="315"
                  src="https://www.youtube.com/embed/fXP4_2qRHng?si=tzqiKuWFkqAPXG5p" title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
          <button class="close_video" @click="isActive = false">X</button>
        </div>
        <div class="cards">
          <div class="card1"></div>
          <div class="card2"></div>
          <div class="card3"></div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.cards{
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
  height: 100%;
  div:not(:nth-child(2)){
    transition: 0.5s all ease;
    border-radius: 20px;
    &:hover{
      transform: scale(1.14) rotate(2deg);
    }
  }
}
.card1{
  background: url("/src/assets/image/webber.png") no-repeat;
}
.card2{
  background: url("/src/assets/image/dragon-fly.png") no-repeat;
  transition: 0.5s all ease;
  background-size:cover;
  border-radius: 20px;
  &:hover{
    transform: scale(1.14) rotate(-2deg);
  }
}
.card3{
  background: url("/src/assets/image/winter.png") no-repeat center;
}
.mini_block{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.general{
  padding: 60px;
  position: relative;
}
.container_block {
  border-radius: 20px;
  margin: 0 auto;
  width: 88%;
  background: rgb(234, 222, 200 ,0.9);
  grid-template-columns: 3fr 1.4fr;
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
  span{
    font-size: 22px;
  }
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
  object-fit: cover;
  object-position: bottom;
  height: 100%;
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
  p{
    color: black;
    text-align: center;
    white-space: break-spaces;
  }
}
.survive{
  color: rgb(255, 247, 98);
  padding: 18px;
  font-size: 22px;
}
.img_main {
  background: url("/src/assets/image/reign.jpg") no-repeat center center;
  background-size: cover;
  border-radius: 20px 20px 0 0;
  height: 50%;
}
.mini_block a{
  background: lavenderblush;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  padding: 5px;
  width: 100%;
  p{
    color: black;
    text-align: center;
  }
}
.play_video{
  background: none;
  border: none;
  cursor: pointer;
}
.video_container{
  position: absolute;
  height: 315px;
  display: flex;
  justify-content: end;
}
.close_video{
  background: yellow;
  position: absolute;
  width: 40px;
  height: 20px;
  z-index: 100;
  background: none;
  border: solid 2px white;
  border-radius: 0 20px 0 0;
  color: white;
}
.video{
  border: solid 2px black;
  margin-bottom: 130px;
  border-radius: 20px;
  position: relative;
}
</style>