<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand" :to="{name:'home'}">Myspace</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- 使用:to代替href即可不用每次跳转都向后端发请求，而是在前端跳转 -->
          <router-link class="nav-link active" aria-current="page" :to="{name:'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'userlist'}">Friend</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'userprofile'}">Gym</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'register'}">Register</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:"NavBar",
}
</script>

<style>

</style>
<script>

</script>

<style scoped>

</style>