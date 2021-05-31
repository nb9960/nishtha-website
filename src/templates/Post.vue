```vue
<template>
  <Layout>
    <b-card
      class="shadow-sm"
      :img-src="$page.post.image"
    >
      <div class="flex flex-wrap mb-4 text-sm">
        <g-link
          v-for="tag in $page.post.tags"
          :key="tag.id"
          :to="tag.path"
          class="bg-gray-300 rounded-full px-2 py-1 mr-4 mb-4 text-gray-700 hover:text-gray-300 hover:bg-gray-700"
        >
          {{ tag.title }}
        </g-link>
      </div>
      <div
        class="mt-8 mb-16 prose lg:prose-lg xl:prose-xl"
        v-html="$page.post.content"
      />
    </b-card>
  </Layout>
</template>
```

<page-query>
query Post ($path: String!){
    post: post(path: $path){
        title
        content
        image
        date
        tags {
          title
          path
        }
    }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          property: 'og:image',
          content: this.$page.post.image
        },
        {
          property: 'og:title',
          content: this.$page.post.title
        },

        {
          name: 'twitter:image',
          content: this.$page.post.image
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:url',
          content: 'erdeminanc.com'
        },
        {
          name: 'twitter:title',
          content: this.$page.post.title
        }
      ]
    }
  }
}
</script>

<style></style>
