<template>
<div class="container">
  <div id="nav">
    <router-link to="/">HOME</router-link> 
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/posts">POSTS</router-link>
  </div>
  <router-view />
</div>
</template>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}


#nav a.router-link-exact-active {
  color: #42b983;
}*/



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  margin-top: 50px;
}


#nav a {
  color: #2c3e50;
  letter-spacing: 3px;
  margin-left: 20px;
  text-decoration: none;
  color: gray;
  font-weight: bold;
  font-size: 10pt;
}

#nav a.router-link-exact-active {
  color: #00ff00;
}
</style>
