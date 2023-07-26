<template>
    <div ref="help" data-aos="zoom-in" class="help">
        <div class="container text-center">
            <h3>Техпідтримка</h3>
            <div class="help_content">
                <p>
                    Технічна підтримка інтернет-магазину VeeSweet – це команда професіоналів, що спеціалізуються на наданні 
                    високоякісної допомоги та підтримки клієнтам у всіх питаннях, пов'язаних із використанням інтернет-магазину 
                    VeeSweet. Наша мета – забезпечити максимальне задоволення клієнтів та допомогти їм повністю освоїти та 
                    скористатися всіма функціями та можливостями, пропонованими VeeSweet.
                </p>
            </div>
            <a :href="linkToRedirect" target="blank"><button>Перейти до магазину</button></a>
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
    .help{
        display: flex;
        justify-content: center;
        padding-top: 80px;
    }
    h3{
        font-weight: bold;
        font-size: 54px;
        margin-bottom: 20px;
    }
    p{
        max-width: 765px;
        font-size: 18px;
        margin-bottom: 40px;
    }
    button{
        border-radius: 5px;
        width: 100%;
        max-width: 250px;
        height: 50px;
        font-weight: bold;
        background: transparent;
        border: 2px solid rgb(180, 31, 31);
    }
    .help_content{
        justify-content: center;
        width: 100%;
        display: flex;
    }
    @media (max-width: 416px) {
        h3{
            font-weight: bold;
            font-size: 44px;
            margin-bottom: 20px;
        }
    }
</style>