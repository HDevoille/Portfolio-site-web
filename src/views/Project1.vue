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

        <div class="project_desc">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, placeat quisquam consequuntur, facilis explicabo non labore atque nemo consectetur aliquid harum quaerat provident adipisci saepe possimus omnis. Ullam voluptas itaque perspiciatis, consectetur nesciunt, iste similique minus quisquam id blanditiis veniam voluptate nam quaerat assumenda non fugit est repellat repellendus ea nisi, illo facilis. Cumque dolore eligendi culpa tempora incidunt doloremque atque dolores exercitationem inventore, provident eaque vitae. Aut, enim in aperiam ad dolorum necessitatibus nulla quis blanditiis labore non ipsam, excepturi esse illo natus? Error optio rerum non provident dolorem atque ipsa obcaecati. Alias reiciendis ducimus officiis mollitia consectetur? Maxime?</p>
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

.project_desc p{
    color: #fff;
    font-size: 14px;
}
</style>