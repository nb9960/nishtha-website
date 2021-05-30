<template>
  <Layout>
      <b-card 
        class="shadow-sm"
        :img-src="$page.post.image">
        
        <div v-html="$page.post.content"></div>

      </b-card>
      
  </Layout>
</template>

<page-query>
query Post ($path: String!){
    post: post(path: $path){
        title
        content
        image
        date
    }
}
</page-query>

<script>
export default {
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
}
</script>

<style>
    
</style>