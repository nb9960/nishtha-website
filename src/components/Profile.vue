<template>
    <div id="profile">
   
  <div class="card shadow-sm">
              <img class="card-img-top" src="@/assets/images/cover.jpeg" alt="cover-photo">
              <img class="profile-picture" src="@/assets/images/nishtha.jpg" alt="profile-photo">
        <div class="card-body">
            <h5 class="card-title">Nishtha Bodani</h5>
                <p class="card-text">Student Developer</p>
                 <div class="social-bar">
                    <a href="https://twitter.com/nishtha9960" target="_blank">
                        <vue-fontawesome class="icon" icon="twitter" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>

                    <a href="https://www.linkedin.com/in/nishtha-bodani/" target="_blank">
                        <vue-fontawesome class="icon" icon="linkedin" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                    <a href="https://github.com/nb9960" target="_blank">
                        <vue-fontawesome class="icon" icon="github" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                    <a href="https://www.instagram.com/nishtha.___/" target="_blank">
                        <vue-fontawesome class="icon" icon="instagram" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                    <a href="https://www.facebook.com/nbodani.08" target="_blank">
                        <vue-fontawesome class="icon" icon="facebook" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                </div>
                <hr>
                <p>Tech Stack</p>
                   <b-badge pill variant="dark" v-for="item in tags" :key="item" class="m-1" style="font-size: 1rem"> {{ item }} </b-badge> 
        </div>
    </div>

    <div class="card shadow-sm mt-3">
        <div class="card-body">
            <h5 class="card-title">About</h5>
                    <p>
                      <vue-fontawesome class="icon" icon="code" size="1.4" color="lightgray"></vue-fontawesome>Undergraduate at <a href="http://www.iitbhu.ac.in/" target="_blank"> Indian Institute of Technology, Varanasi</a>
                    </p>
                    <p>   
                        <vue-fontawesome class="icon" icon="ship" size="1.4" color="lightgray"></vue-fontawesome>Secondary School Education from Doon International School, Kanpur
                    </p>
                    <p>
                        <vue-fontawesome class="icon" icon="home" size="1.4" color="lightgray"> </vue-fontawesome>Lives in Kanpur, Uttar Pradesh, India
                    </p>
                </div>
          </div>
    </div>
</template>

<script>


export default {
    name: 'Profile',
    data: () => ({
      tags: [
        'HTML', 'CSS', 'Javascript', 'VueJS', 'Flutter', 'C/C++', 'Gridsome', 'Django', 'Python3', 'Firebase','REST APIs', 'Git', 'Linux'
      ],
    }),
    
}

</script>

<style lang="scss" >

.profile-picture { 
    border-radius: 100%; 
    width: 50%; 
    margin-top: -50px; 
    border: 4px solid white; 
    display: block; 
    margin-left: auto; 
    margin-right: auto; 
}

.icon{
    padding: 10px;
}

.card-text-mini{
    font-size: 90%;
    font-weight: 200;
}

ul {
    list-style-type: none;
    padding: 0;
}


</style>