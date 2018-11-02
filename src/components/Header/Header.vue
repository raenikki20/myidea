<template>
    <div id="Header">
        <b-navbar toggleable="md" class="header" sticky>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">
                <img src="https://placekitten.com/g/30/30" alt="BV">
                Name
            </b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/login">Login</b-nav-item>
                    <b-nav-item to="/signup">SignUp</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
    #header {}
    .header {
        background-color: #D0D0D0;
    }
</style>
