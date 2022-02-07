<script setup>
  import Playlogo from "@/assets/svg/Playlogo.svg";
</script>

<template>
  <section id="feature">
    <div class="container">
      <div class="title-section">
        <h3>Feature</h3>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div class="feature-item">
        <div class="item">
          <img :src="'src/assets/images/fonts.svg'" alt="" />
          <h4>OpenType features Variable fonts</h4>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div class="item">
          <img :src="'src/assets/images/design.svg'" alt="" />
          <h4>Design with real data</h4>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div class="item">
          <img :src="'src/assets/images/action.svg'" alt="" />
          <h4>Fastest way to take action</h4>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
      </div>
      <div class="video">
        <div class="image-back">
          <img :src="'src/assets/images/back-video.png'" alt="" />
        </div>
        <div class="play-video">
          <button id="play">
            <Playlogo />
          </button>
        </div>
        <video class="video-play h-auto">
          <source src="src/assets/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>
