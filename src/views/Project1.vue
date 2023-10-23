<script setup>
</script>

<template>
    <header>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project1</title>
    </header>
    <body>
        <div class="home_button">
            <router-link to="/"><img class="img_home_button" src="../assets/home_button.png"></router-link>
        </div>

        <div id="title1">
            <h1>Hybrid Brain Computer Interface</h1>
        </div>


    </body>
</template>

<style>
    body{
  background-color: #333;
}

.home_button{
    position: absolute;
    top: 1%;
    left: 1%;
}

.img_home_button{
    width: 30px;
    height: auto;
}

#title1{
    position: absolute;
    top: 1%;
    left: 10%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    font-size: 36px;
  }
</style>