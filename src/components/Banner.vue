<template>
    <div class="banner_container">
        <div class="banner">
            <div class="container">
                <div class="banner_content">
                    <vue-typed-js 
                        :strings="['Привітайте новий рівень стилю з VeeSweet!']" 
                        :loop="true"
                        :showCursor="false">
                        <h1 class="typing"></h1>
                    </vue-typed-js>                     
                    

                    <button><a :href="linkToRedirect" target="blank">Перейти до магазину</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'BannerContainer',
    data() {
    return {
      linkToRedirect: process.env.VUE_APP_LINK_TO_REDIRECT_COMPANY
    }
  },
}
</script>

<style scoped>
    .banner{
        min-height: 678px;
        position: relative;
        display: flex;
        align-items: center;
        background-image: url("../../public/banner.webp");
        background-repeat:  no-repeat;
        background-size: 100%;
        background-attachment:fixed;
    }

    .banner .container{
        z-index: 2;
    }

    .banner::after{
        z-index: 1;
        background-color:rgba(33, 36, 61, 0.56);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
    }
    .banner h1{
        font-size: 54px;
        font-weight: bold;
        margin-bottom: 20px;
        max-width: 491px;
        color: white;
        min-height: 198px;
    }
    .banner button{
        font-weight: bold;
        width: 250px;
        border-radius: 5px;
        border: 2px solid white;
        background: transparent;
        height: 50px;
    }

    .banner_content{
        z-index: 2;
    }

    .banner button a{
        color: white;
        text-decoration: none;
    }
    @media (max-width: 1239px) {
        .banner{
            min-height: 500px;
            background-size: 100% 100%;
        }
    }
    @media (max-width: 416px) {
        .banner h1{
            font-weight: bold;
            font-size: 44px;
            margin-bottom: 20px;
        }
        .banner_content{
            text-align: center;
        }
        .banner{
            background-size: auto 100%;
        }
    }
</style>