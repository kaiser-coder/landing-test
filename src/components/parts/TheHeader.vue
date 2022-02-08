<script setup>
   import FacebookIcon from '@/assets/svg/FacebookIcon.svg'
   import TwitterIcon from '@/assets/svg/TwitterIcon.svg'
   import LinkedInIcon from '@/assets/svg/LinkedInIcon.svg'

   defineProps({
      menu: Array
   })
</script>

<template>
    <header id="header">
      <div class="container">
         <div class="menu-social">
            <nav class="menu">
               <ul>
                  <li v-for="(menuItem, key) in menu">
                     <a :href="menuItem.link">{{ menuItem.label }}</a>
                  </li>
               </ul>
            </nav>
            <div class="social">
               <nav class="social">
                  <ul>
                     <li>
                        <a href="#">
                           <TwitterIcon/>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <FacebookIcon/>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <LinkedInIcon/>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   </header>
   <div class="navigation-menu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
   </div>
</template>

<style scoped lang="scss">
.navigation-menu{
   display: none;
    flex-direction: column;
    height: 39px;
    position: absolute;
    top: 50px;
    right: 20px;
    justify-content: space-between;
    align-items: flex-end;
    @media(max-width:769px){
       display: flex;
    }
   .bar{
      height: 4px;
      background-color: #fff;
      &:nth-child(1){
         width: 20px;
      }
      &:nth-child(2){
         width: 40px;
      }
      &:nth-child(3){
         width: 50px;
      }
   }
}
    header{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 100%;
         @media(max-width:769px){
            display: none;
         }
      .container{
         @media(max-width:769px){
            width: 100%;
            margin: 0;
            padding: 0;
            max-width: 100%;
         }
      }
      .menu-social{
         display: flex;
         align-items: center;
         justify-content: space-between;
         // margin-top: 60px;
         margin-top: 45px;
         @media(max-width: 769px){
            background-color: #2091F9;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh; 
            align-items: center;
            justify-content: center;    
                  
         }
         .menu{
            @media(max-width:769px){
               width: 100%;
            }
         }
         @media(max-width:769px){
            flex-direction: column;
            margin-top: 0;
            padding: 25px 0;
         }
         li{
            display: inline-block;
            margin-right: 40px;
            @media(max-width:769px){
               display: block;
               margin-right: 0;
               text-align: center;
               padding: 15px 0;
               width: 100%;
            }
            a{
               @media(max-width:769px){
                  font-family: 'Graphik-Bold';
                  font-size: 25px;
               }
            }
         }
         .social{
            @media(max-width:769px){                     
               margin-top: 20px; 
            }
            li{
               margin-right: 30px;
               @media(max-width:769px){
                  display: inline;
                  border: none;
               }
            }
         }
      }
    }
</style>
