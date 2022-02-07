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
                           <FacebookIcon/>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <TwitterIcon/>
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
</template>

<style scoped lang="scss">
    header{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 100%;
      .menu-social{
         display: flex;
         align-items: center;
         justify-content: space-between;
         // margin-top: 60px;
         margin-top: 45px;
         li{
               display: inline-block;
               margin-right: 40px;
         }
         .social{
               li{
                  margin-right: 30px;
               }
         }
      }
    }
</style>