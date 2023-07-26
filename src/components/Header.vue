<template>
  <div class="header">

  <div class="hamburger-menu">
    <label v-on:click="changeValueOpen" :class="!boolOpenStatus ? 'menu__btn' : 'checked' ">
      <span></span>
    </label>
    <ul v-if="boolOpenStatus" class="menu__box">
      <li><a @click="scrollToContainer('about')">Про нас</a></li>
      <li><a @click="scrollToContainer('popular')">Популярне</a></li>
      <li><a @click="scrollToContainer('descount')">Першим покупцям</a></li>
      <li><a @click="scrollToContainer('help')">Техпідтримка</a></li>
    </ul>
  </div>

    <div class="header_top">
      <div class="container header__inner">
        <div class="row">
          <div class="col-md-6">
            <p class="m-0 text-white">{{ phone }}</p>
          </div>
          <div class="col-md-6">
            <div class="row justify-content-end social">
                <div class="icon-container">
                  <a :href="linkToRedirect" target="blank">
                    <Instagram/>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header_bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-4 p-0">
            <LogoIco/>
          </div>
          <div class="link-container col-md-8 text-end p-0">
            <a @click="scrollToContainer('about')">Про нас</a>
            <a @click="scrollToContainer('popular')">Популярне</a>
            <a @click="scrollToContainer('descount')">Першим покупцям</a>
            <a @click="scrollToContainer('help')">Техпідтримка</a>
            <button>
              <a target="blank" :href="linkToRedirect">Перейти до магазину</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Instagram from "../assets/svg/instagram"
import LogoIco from "../assets/svg/logo"

export default {
  name: 'HeaderContainer',
  components: {
    Instagram,
    LogoIco
  },
  data() {
    return {
      phone: process.env.VUE_APP_PHONE_TECH,
      linkToRedirect: process.env.VUE_APP_LINK_TO_REDIRECT_COMPANY,
      boolOpenStatus: false
    }
  },
  props:{
    scrollToContainer: Function
  },
  methods:{
    changeValueOpen() {
      this.boolOpenStatus = !this.boolOpenStatus
    }
  }
};
</script>

<style scoped>
  .header{
    box-shadow: 0 2px 2px -2px black;
  }
  .header_top{
    width: 100%;
    background:rgb(180, 31, 31);
  }
  .header_bottom a{
    cursor: pointer;
    text-decoration: none;
    color: black;
    margin-right: 20px;
  }
  .header .container {
    max-width: 1200px;
  }
  .header__inner{
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .header__inner .col-md-6:first-child{
    display: flex;
    align-items: center;
  }
  .icon-container{
    width: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    height: 30px;
    background: white;
    border-radius: 3px;
  }
  .header_bottom{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .header_bottom button{
    border-radius: 5px;
    width: 100%;
    max-width: 250px;
    height: 50px;
    font-weight: bold;
    background: transparent;
    border: 2px solid rgb(180, 31, 31);
  }
  .header_bottom button a{
    margin: 0;
  }

  .menu__btn,
  .checked {
    display: flex; 
    align-items: center;  
    position: fixed;
    top: 15px;
    right: 15px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 4;
  }

  .menu__btn > span,
  .checked > span,
  .menu__btn > span::before,
  .checked > span::before,
  .menu__btn > span::after,
  .checked > span::after{
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: black;
  }
  .menu__btn > span::before,
  .checked > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after,
  .checked > span::after {
    content: '';
    top: 8px;
  }

  .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    text-align: center;
    background-color: #ECEFF1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  }

  .menu__box a{
    font-size: 18px;
  }
  .menu__box li{
    text-align: left;
    padding-left: 20px;
    margin-bottom: 20px;
  }
  .checked > span {
    transform: rotate(45deg);
  }
  .checked > span::before {
    top: 0;
    transform: rotate(0);
  }
  .checked > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  .menu__box {
    transition: 0.5s;
    visibility: visible;
    right: 0;
    z-index: 3;
  }

  @media(min-width: 1239px){
    .menu__btn{
      display: none;
    }
  }

  @media (max-width: 1239px) {
    .link-container,
    .social{
      display: none;
    }

    .header_top,
    .header_bottom{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
