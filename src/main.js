import { createApp } from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue3-geolocation'
import GMaps from 'vuejs3-google-maps'

createApp(App)
  .use(VueGeolocation)
  .use(GMaps, {
    load: {
      apiKey: "your-api-key",
      libraries: ["places"],
    },
  })
  .mount("#app");