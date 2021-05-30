<template>
  <Layout>
      <b-card
      title="Contact me"
      class="shadow-sm">

        <hr>

        <form action="https://formspree.io/moqpvwkq" method="POST">
            <div class="form-group">
                <input type="email" name="_replyto" class="form-control" id="inputEmail" placeholder="Your email">
                
            </div>
            <div class="form-group">                
                <textarea class="form-control" name="message" placeholder="Your message" id="inputMessage" rows="12"></textarea>
            </div>
            <button type="submit" class="btn btn-block btn-outline-secondary">Send</button>
        </form>

      </b-card>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>

</style>