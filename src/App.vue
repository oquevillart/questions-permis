<template>
    <header class="header">
        <RouterLink to="/">Questions Permis</RouterLink>
        <RouterLink to="/mentions">Mentions Légales</RouterLink>
    </header>
    <main>
        <RouterView />
    </main>

</template>

<script setup>


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
body{
    margin: 0;
    background-color: #fff;
    font-family: "Roboto", sans-serif;
}
header a {
    margin: 15px 15px;
}
</style>