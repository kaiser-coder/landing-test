<template>
  <section id="newsletter">
    <div class="container">
      <div class="newsletter-content">
        <div class="image">
          <img :src="'src/assets/images/light-draw.svg'" alt="" />
        </div>
        <div class="description">
          <h4>At your fingertips</h4>
          <h3>
            Lightning fast <br />
            prototyping
          </h3>
          <div class="action-content">
            <h4 class="subscripe">Subscribe to our Newsletter</h4>
            <p>Available exclusivery on Figmaland</p>
            <form class="form">
              <input type="text" class="input-text" placeholder="Your Email" />
              <button class="button-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
