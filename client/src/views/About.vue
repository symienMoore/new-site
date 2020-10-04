<template>
  <div class="container">
    <div class="holder">
     <img class="logo" src="../assets/aboutHeader.png" alt="" width="300">
     <div class="row about">
      <div class="col-md">
        <p>
        Hi, my name is Symi, and 
        along with being a web developer, I am a semi-decent skateboarder, a 
        lover of good coffee, and a fan of the wilderness. I am a big believer
        in failing forward and try to document some of those failures on my 
        instagram. 
        </p>
        <p>
        I have been writing code for about 3 years now, and have worked with
        companies such as sealed air, duke energy, and liberty mutual. I started my journey 
        with a simple trait. Curiosity. I've always been a super curious dude, and that curiosity 
        led me to computers, and building applications.
        </p>
        <p>
        I currently am working on builing a platform for myself to help assist other developers
        in their journey, as well as progress on my own path, but ultimately, the goal,
        is to always keep improving.
        </p>
      </div>
      <div class="col-md">
        <img class="laptop" src="../assets/bedLaptop.jpg" alt="" width="600">
      </div>
     </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({

  }),

  mounted: () => {
    
  }
}
</script>

<style>
.logo {
  margin-top: 100px;
}

.about {
  margin-top: 100px;
}

.laptop {
  border: 1px solid #00ff00;
}

 @media only screen and (max-width: 500px) {
   .laptop {
     width: 300px;
   }
 }
</style>