<template>
    <section id="baneer">
      <div class="logo">
         <img src="./images/logo.svg" alt="">
      </div>
      <div class="title-baneer">
         <h2>The best products<br> start with Figma</h2>
         <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
         <a class="button-primary" href="#">Try for free</a>
      </div>
   </section>
</template>

<style lang="scss">
    @import '@/style.scss';

    #baneer{
        min-height: 100vh;
        background-image: url(@/assets/images/baneer.png);
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        padding: 45px 0;
        background-position: 50% 100%;
        .logo{
            img{
                width: 186px;
            }
        }
        h2{
            color: $lightText;
            font-size: 74px;
            line-height: 84px;
            letter-spacing: 0.2px;
            text-align: center;
            font-family: 'Graphik-Bold';
            margin-bottom: 27px;
        }
        p{
            color: $lightText;
            font-family: 'Graphik-Regular';
            text-align: center;
            font-size: 28px;
            line-height: 40px;
            letter-spacing: 0.2px;
            margin-bottom: 90px;
        }
        .title-baneer{
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 826px;
            margin-bottom: 185px;
        }
    }
</style>