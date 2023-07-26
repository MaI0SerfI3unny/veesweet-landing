<template>
    <div class="footer">
        <div class="container">
            <div class="foot__top">
                <div class="row">
                    <div class="col-md-4">
                        <LogoIco/>
                    </div>
                    <div class="col-md-8 link-container">
                        <a @click="scrollToContainer('about')">Про нас</a>
                        <a @click="scrollToContainer('popular')">Популярне</a>
                        <a @click="scrollToContainer('descount')">Першим покупцям</a>
                        <a @click="scrollToContainer('help')">Техпідтримка</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="text-white m-0">Created by MaIOSerfI3unny</p>
                    </div>
                    <div class="col-md-6">
                        <p class="text-white m-0">All rights Reserved ® 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LogoIco from "../assets/svg/logo"

export default {
  name: 'FooterContainer',
  components: {
    LogoIco
  },
  props:{
    scrollToContainer: Function
  }
}
</script>


<style scoped>
    .footer{
        margin-top: 180px;
    }
    .col-md-8{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    a{
        cursor: pointer;
        text-decoration: none;
        color: black;
        margin-right: 20px;
    }
    .foot__top{
        margin-bottom: 50px;
    }
    .foot__bottom{
        padding-top: 15px;
        padding-bottom: 15px;
        background:rgb(180, 31, 31)
    }
    .foot__bottom .row{
        display: flex;
        align-items: center;
    }
    .col-md-6:last-child{
        text-align: right;
    }
    @media (max-width: 1239px) {
        .link-container{
            display: none;
        }
    }
</style>