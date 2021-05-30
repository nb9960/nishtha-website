<template>
  <Layout>
    <b-card title="Projects" class="shadow-sm">
      <div
        class="list"
        v-for="post in $page.posts.edges"
        :key="post.node.id"
      >
        <hr />
        <b-container>

          <b-row>
            <b-col cols="4">
              <img class="blog-list-image" :src="post.node.image" alt="blog-image">
              
              
            </b-col>
            <b-col cols="8">
              <g-link class="blog-title" :to="post.node.path">{{post.node.title | uppercasefilter}}</g-link>
              <p class="abstract">{{ post.node.abstract }}</p>
              <div class="project-dates float-right mt-2">
                  {{ post.node.date | luxon:format('dd-MM-yyyy') }}
              </div>
            </b-col>
          </b-row>

        </b-container>
      </div>
    </b-card>
  </Layout>
</template>

<page-query>
  query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
        abstract
        image
        date
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="scss">

.blog-list-image{
  width: 100%;
  border-radius: 5%;
}



.blog-title{
  font-weight: 600;
}

.abstract{
  font-size: 90%;
  font-weight: 300;
}

</style>