<script setup>
</script>

<template>
  <header>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cours3</title>
  </header>

  <body>
    <div class="title">
      <h1>Hugo Devoille</h1>
      <div class="links">
        <a href="https://www.linkedin.com/" target="_blank"><img class="logo" src=".\assets\linkedin-logo.png"></a>
        <a href="https://github.com/" target="_blank"><img class="logo" src=".\assets\github-logo.png"></a>
      </div>
    </div>
    
    <div class="project-grid">
      <div class="project">
          <a href="project1.html">
            <img src=".\assets\EEG.jpg" alt="Hybrid Brain Computer Interface for VR">
            <h2>Hybrid Brain Computer Interface for VR</h2>
          </a>
      </div>
      <div class="project">
        <a href="project2.html">
          <img src=".\assets\EMG_game.png" alt="EMG controlled arcade game">
          <h2>EMG controlled arcade game</h2>
        </a>
      </div>
      <div class="project">
        <a href="project2.html">
          <img src=".\assets\EMG_game.png" alt="EMG controlled arcade game">
          <h2>EMG controlled arcade game</h2>
        </a>
      </div>
    </div>
  </body>
</template>

<style>

body{
  background-color: #333;
}

  .title{
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: #333;
  color: #fff;
  font-size: 72px;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    background-color: #333;
  }

  .project {
    text-align: center;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.2s ease-in-out;
  }

  .project:hover {
    transform: scale(2); /* Increase size on hover */
  }

  .project a {
    text-decoration: none;
    color: #333;
  }

  .project img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .project h2 {
    margin-top: 10px;
    font-size: 18px;
  }

  .links {
    margin-top: 10px; /* Add space below the title */
  }

  .logo{
    max-width: 5%;
    height: auto;
    border-radius: 10px;
  }

  .links a {
    text-decoration: none;
    color: #0077B5; /* LinkedIn blue color */
    margin-right: 20px; /* Add spacing between the links */
  }

  .links a:last-child {
    margin-right: 0; /* Remove margin from the last link */
  }

  .links a:hover {
    text-decoration: underline; /* Underline the links on hover */
  }

</style>
