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
            <g-link class="nav-link" to="/">Blog</g-link>
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
    <footer class="footer">
      <p>
        Made with
        <vue-fontawesome icon="coffee" color="brown" size="1"></vue-fontawesome> in India
        - Powered by Vue and Gridsome
      </p>
      <p>© 2021 <a href="https://nishthab.tech/"> Nishtha Bodani </a></p>
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
                content: 'nishthab.tech',
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
.footer {
  height:110px;
  padding: 10px 35px 10px 35px;
  margin-top: 17px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  display: absolute;
}
</style>
