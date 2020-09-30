<template>
  <div class="home container">
    <!-- <h1 class="name">Symi.</h1> -->
    <img src="../assets/logo.png" alt="" class="logo" width="200">
    <div class="header">
      <img src="../assets/symi.png" alt="" width="200">
      <div class="bio">
      <p>
        I'm baby beard pork belly fanny pack lo-fi, chartreuse 8-bit fingerstache. 
        Cloud bread kinfolk small batch kombucha subway tile direct trade, 
        letterpress migas neutra tumeric unicorn tilde copper mug food truck.
      </p>
      <p>
        Dreamcatcher messenger bag flannel VHS squid schlitz master cleanse. 
        Ramps 8-bit butcher, tbh iPhone marfa tilde messenger bag gentrify mlkshk mixtape. 
        Man bun godard coloring book, viral selfies +1 umami prism bespoke you 
        probably haven't heard of them taiyaki gastropub.
      </p>
      </div>
    </div>
      <ul class="links">
        <li><a href="https://github.com/symienMoore"><i class="fab fa-github fa-2x"></i></a> </li>
        <li><a href="https://www.instagram.com/mynameissymi/"><i class="fab fa-instagram-square fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com/in/symien-moore/"><i class="fab fa-linkedin fa-2x"></i></a></li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },

  data() {

  },
  computed: {

  },
  methods:{

  }
};
</script>

<style scoped>
.logo {
  margin-top: 10%;
  margin-left: 40%;
  text-align: center;
}
  .header {
    margin-top: 7%;
    margin-left: 10%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, .3fr));
  }

  .header img {
    border-radius: 100%;
  }

  .bio {
    width: 500px;
    font-size: 13px;
    margin-top: 30px;
  }

  .links {
    display: flex;
    margin-top: 60px;
  }

  .links li {
    list-style-type: none;
    margin-left: 20px;
  }

  .links li a {
    color: gray;
    
  }

  @media only screen and (max-width: 500px) {
    .logo {
      margin-left: 20%;
    }

    .bio {
      width: 200px;
      text-align: center;
    }
    
  }
</style>