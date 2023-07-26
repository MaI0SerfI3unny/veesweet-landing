<template>
    <div ref="descount" data-aos="zoom-in" class="discount">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h3>Першим покупцям</h3>
                    <p>
                        Уникальна пропозиція від компанії VeeSweet! Станьте першими 
                        покупцями і отримайте знижку 100 грн на кожний товар!
                        <br/><br/>
                        Ми хочемо висловити свою вдячність першим клієнтам, які вирішили 
                        довіритися VeeSweet. Щоб ви змогли насолоджуватися ексклюзивними 
                        продуктами з нашого інтернет-магазину, ми пропонуємо вам цю особливу знижку.
                        <br/><br/>
                        Виглядає просто: купуйте будь-який товар з нашого широкого асортименту, і
                        ми з радістю зменшимо ціну на 100 грн. Виберіть собі стильну модну одяг, 
                        аксесуари, косметику або будь-який інший товар, який вас приваблює, і економте 
                        100 грн на кожній покупці!
                    </p>
                    <a target="blank" :href="linkToRedirect">
                        <button>
                            Перейти до магазину
                        </button>
                    </a>
                </div>
                <div class="col-md-6">
                    <img src="/discount.jpeg"/>
                    <img src="/discount-label.png"/>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'HelpContainer',
  data() {
    return {
      linkToRedirect: process.env.VUE_APP_LINK_TO_REDIRECT_COMPANY
    }
  }
}
</script>

<style scoped>
    .discount{
        margin-top: 120px;
        background:linear-gradient(0deg, rgb(180, 31, 31) 0%, #FF7C7C 100%);
        padding-top: 80px;
        color: white;
        padding-bottom: 80px;
    }
    h3{
        font-weight: bold;
        font-size: 54px;
        margin-bottom: 20px;
    }
    p{
        font-size: 18px;
        margin-bottom: 20px;
    }
    img{
        width: 100%;
    }
    img:last-child{
        max-width:200px;
        margin-top: -25px;
    }
    button{
        font-weight: bold;
        width: 250px;
        border-radius: 5px;
        border: 2px solid white;
        background: transparent;
        height: 50px;
        color: white;
        margin-bottom: 40px;
    }
    @media (max-width: 416px) {
        h3{
            font-weight: bold;
            font-size: 44px;
            margin-bottom: 20px;
        }
    }
</style>