<template>
<div class="container">
  <div id="nav">
    <router-link to="/">HOME</router-link> 
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/posts">POSTS</router-link>
  </div>
  <div class="mobile-nav">
    <img src="./assets/target.png" alt="mobile nav icon" width="30">
  </div>
  <router-view />
    <ul class="links">
        <li><a href="https://github.com/symienMoore"><i class="fab fa-github fa-2x"></i></a> </li>
        <li><a href="https://www.instagram.com/mynameissymi/"><i class="fab fa-instagram-square fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com/in/symien-moore/"><i class="fab fa-linkedin fa-2x"></i></a></li>
      </ul>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  margin-top: 50px;
}


#nav a {
  letter-spacing: 3px;
  margin-left: 20px;
  text-decoration: none;
  color: rgb(180, 180, 180);
  font-weight: bold;
  font-size: 10pt;
}

#nav a.router-link-exact-active {
  color: #00ff00;
}

.mobile-nav {
  display: none;
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
    color: #00C3EE;
    
  }
 @media only screen and (max-width: 500px) {
   .mobile-nav {
     display: block;
     margin-top: 20px;
   }

   #nav {
     display: none;
   }
 }
</style>
