<template>
  <div class="layout">
    <!-- navbar starts -->
    <nav class="navbar navbar-ligt bg-light navbar-expand">
      <div class="container">
        <ul class="navbar-nav mr-auto order-1">
          <li class="nav-item">
            <g-link class="nav-link" to="/">{{
              $static.metadata.siteName
            }}</g-link>
          </li>
        </ul>
        <ul class="navbar-nav order-3">
          <li class="nav-item">
            <g-link class="nav-link" to="/project/">Projects</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="https://erdeminanc.medium.com">Blog</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/contact/">Contact me</g-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- navbar ends -->

    <b-container class="mt-3">
      <b-row>
        <b-col cols="12" md="4">
          <profile class="mb-3"></profile>
        </b-col>
        <b-col cols="12" md="8">
          <!-- content-->
          <slot />
        </b-col>
      </b-row>
    </b-container>

    <!-- Footer -->
    <footer>
      <p>
        Made with
        <vue-fontawesome icon="heart" color="red" size="1"></vue-fontawesome> in Istanbul
        - Powered by Vue and Gridsome
      </p>
      <p>© 2021 <a href="https://erdeminanc.com"> Erdem Inanc </a></p>
    </footer>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
  components: {
    Profile,
        metaInfo(){
        return {
            title: this.$page.post.title,
                  meta: [
                {
                property: 'og:image',
                content: this.$page.post.image,
                },
                {
                property: 'og:title',
                content: this.$page.post.title,
                },
                
                {
                name: 'twitter:image',
                content: this.$page.post.image,
                },
                {
                name: 'twitter:card',
                content: 'summary',
                },
                {
                name: "twitter:url",
                content: 'erdeminanc.com',
                },
                {
                name: "twitter:title",
                content: this.$page.post.title,
                },
            ],
        }
    }
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: 0.5rem;
  background-color: #f8f9fa;
  text-align: center;
}
</style>
