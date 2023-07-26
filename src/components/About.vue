<template>
    <div ref="about" data-aos="zoom-in" class="about" v-motion-slide-visible-once-right>
        <div class="container">
            <h3 class="text-center">Про нас</h3>
            <p class="about_subtitle text-center">Ласкаво просимо до VeeSweet - твого унікального інтернет-магазину модного одягу для жінок!</p>
            <img class="about_img" src="/about.png" alt="Наша команда"/>
            <p class="text_about_content">
                В VeeSweet ми розуміємо, що стиль і мода - це більше, 
                ніж просто одяг. Це виявлення особистості, вираження унікальності і надання вам впевненості. Тому ми працюємо над тим, 
                щоб допомогти вам створити свій неповторний стиль.
                <br/>
                <br/>
                Наша команда модних експертів відбирає найякісніший одяг від провідних брендів
                та дизайнерів. Ви зможете знайти у нас все, що потрібно - від кожного дня до особливих випадків. 
                Ми пропонуємо широкий вибір стильного одягу, аксесуарів та взуття, які підкреслять вашу індивідуальність.
                <br/>
                <br/>
                З VeeSweet вам доступні останні тенденції моди, елегантні класичні рішення та авангардні дизайнерські 
                експерименти. Ми пропонуємо оновлення колекцій, які задовольнять ваші потреби на будь-яку пору 
                року та за будь-якими умовами. Ми не тільки надаємо вам доступ до найкращого одягу, але й прагнемо 
                забезпечити найкращий сервіс. Наша команда пильнує за якістю кожного замовлення, 
                швидко обробляє його та забезпечує швидку доставку. Ми піклуємося про ваш комфорт 
                і задоволення від покупок у VeeSweet.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutContainer',
}
</script>

<style scoped>
    h3{
        margin-top: 80px;
        font-size: 54px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .about_subtitle{
        font-size: 18px;
    }
    .about_subtitle{
        margin-bottom: 40px;
    }
    img{
        width: 100%;
    }
    .text_about_content{
        margin-top: 20px;
        font-size: 18px;
    }
    @media (max-width: 416px) {
        h3{
            font-weight: bold;
            font-size: 44px;
            margin-bottom: 20px;
        }
    }
</style>