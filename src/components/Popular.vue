<template>
    <div ref="popular" data-aos="zoom-in" class="popular">
        <div class="container">
            <h3>Популярне</h3>
            <div class="row">
                <div v-for="item in popularArr" :key="item.title" class="col-md-3 mt-4">
                    <div class="img-container">
                        <img :src="item.image"/>
                    </div>
                    <h4>{{ item.title.length > 36 ? item.title.slice(0,36) + "..." : item.title }}</h4>
                    <p class="description">{{ item.description }}</p>
                    <p class="price">{{ item.price }} грн</p>
                    <a :href="item.link" target="blank"><button class="buy-btn">Переглянути</button></a>
                </div>
            </div>
            <div class="text-center mt-5 pt-5">
                <a target="blank" :href="linkToRedirect"><button class="more">Подивитися повний каталог</button></a>
            </div>
        </div>
    </div>
</template>

<script>
import popularArr from "../popular.json"

export default {
  name: 'PopularContainer',
    data() {
    return {
      popularArr,
      linkToRedirect: process.env.VUE_APP_LINK_TO_REDIRECT_COMPANY
    }
  }
}
</script>

<style scoped>
    .popular{
       margin-top: 120px 
    }
    img{
        width: 100%;
        margin-bottom: 15px;
    }
    h3{
        font-weight: bold;
        font-size: 54px;
        margin-bottom: 20px;
    }
    .buy-btn{
        border-radius: 5px;
        width: 100%;
        height: 50px;
        font-weight: bold;
        background: transparent;
        border: 2px solid rgb(180, 31, 31);
    }
    .buy-btn:hover{
        transition: 0.5s;
        color: white;
        background: rgb(180, 31, 31);
    }
    .price{
        color: #ff7c7c;
        font-weight: bold;
        font-size: 24px;
    }
    .more{
    border-radius: 5px;
    width: 100%;
    max-width: 280px;
    height: 50px;
    font-weight: bold;
    background: transparent;
    border: 2px solid rgb(180, 31, 31);
    }
    .img-container{
        height: 276px;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .description{
        min-height: 80px;
    }

    @media (max-width: 1239px) {
        .col-md-3{
            width: 33%;
        }
        h4{
            min-height: 58px;
        }
    }
    @media (max-width: 983px) {
        .col-md-3{
            width: 50%;
        }
    }
    @media (max-width: 983px) {
        .col-md-3{
            width: 100%;
        }
    }
    @media (max-width: 416px) {
        h3{
            font-weight: bold;
            font-size: 44px;
            margin-bottom: 20px;
        }
    }
</style>