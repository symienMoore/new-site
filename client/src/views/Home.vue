<template>
  <div class="home container">
    <!-- <h1 class="name">Symi.</h1> -->
    <img src="../assets/logo.png" alt="" class="logo" width="300">
    <div class="header">
      <img src="../assets/symi.png" alt="" width="250">
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
    <h3 class="sub-title">What I specialize in</h3>
    <div class="row benefits-sect">
      <div class="col-sm">
        <div class="card">
          <h5>Front end-development</h5>
          <p>
            I build beautiful ui's using modern technologies,
            like angular, vue, and react
          </p>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <h5>Back end development</h5>
          <p>
            I create scalable backend api's written in javascript, 
            to power applications, and bring speed and reliability
            to users.
          </p> 
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <h5>Deployment & operations</h5>
            I deploy your applications to platforms like
            google cloud, and monitor for performance.
        </div>
      </div>
    </div>
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

  .sub-title {
    text-align: center;
    color: #00ff00;
    margin-top: 5%;
  }

  .benefits-sect {
    margin-top: 5%;
    margin-left: 5%;
  }

  .card {
    width: 250px;
    min-height: 100px;
    padding: 20px;
    color: grey;
    box-shadow: 1px 18px 40px -9px rgba(0, 0, 0, 0.349); 
    border: none;
    text-align: center;
    font-size: 13px;
  }

  @media only screen and (max-width: 500px) {
    .logo {
      margin-left: 2%;
    }

    .bio {
      width: 200px;
      margin-left: 10%;
    }

    .card {
      margin-top: 50px;
    }
    
  }
</style>