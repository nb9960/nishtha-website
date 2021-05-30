<template>
    <div id="profile">
   
  <div class="card shadow-sm">
              <img class="card-img-top" src="@/assets/images/cover_erdeminanc.jpg" alt="cover-photo">
              <img class="profile-picture" src="@/assets/images/erdem_inanc_web.jpg" alt="profile-photo">
        <div class="card-body">
            <h5 class="card-title">Erdem İnanç</h5>
                <p class="card-text">Software Developer</p>
                 <div class="social-bar">
                    <a href="https://twitter.com/erdeminanc" target="_blank">
                        <vue-fontawesome class="icon" icon="twitter" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>

                    <a href="https://www.linkedin.com/in/erdeminanc/" target="_blank">
                        <vue-fontawesome class="icon" icon="linkedin" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                    <a href="https://github.com/erdeminanc" target="_blank">
                        <vue-fontawesome class="icon" icon="github" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                    <a href="https://erdeminanc.medium.com" target="_blank">
                        <vue-fontawesome class="icon" icon="medium" size="1.5" color="lightgray"></vue-fontawesome>
                    </a>
                </div>
                <hr>
                <p>Tech Stack</p>
                <ul class="card-text-mini">
                    <li>Java 8 / Java EE</li>
                    <li>Spring Framework</li>
                    <li>Spring Data JPA, Hibernate</li>
                    <li>Vue.js</li>
                    <li>Native Android Development</li>
                    <li>Kotlin</li>
                    <li>Python for Machine Learning</li>
                </ul>
        </div>
    </div>

    <div class="card shadow-sm mt-3">
        <div class="card-body">
            <h5 class="card-title">About</h5>
                    <p>
                      <vue-fontawesome class="icon" icon="briefcase" size="1.4" color="lightgray"></vue-fontawesome>Works for <a href="http://cospace.sabanciuniv.edu/"  target="_blank">Sabanci Univ Co-Space</a>
                    </p>
                    <p>
                      <vue-fontawesome class="icon" icon="code" size="1.4" color="lightgray"></vue-fontawesome>MSc at <a href="http://www.sabanciuniv.edu/" target="_blank"> Sabanci University</a>
                    </p>
                    <p>   
                        <vue-fontawesome class="icon" icon="ship" size="1.4" color="lightgray"></vue-fontawesome>BSc at <a href="http://www.itu.edu.tr/" target="_blank"> ITU</a>
                    </p>
                
                    <p>
                        <vue-fontawesome class="icon" icon="home" size="1.4" color="lightgray"> </vue-fontawesome>Lives in <a href="https://en.wikipedia.org/wiki/Istanbul" target="_blank">Istanbul</a>
                    </p>
                </div>
          </div>
    </div>
</template>

<script>


export default {
    name: 'Profile',
    
}

</script>

<style lang="scss" >

.profile-picture { 
    border-radius: 100%; 
    width: 50%; 
    margin-top: -50px; 
    border: 4px solid #087E8B; 
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