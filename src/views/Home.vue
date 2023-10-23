<script setup>
</script>

<template>
    <header>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
  </header>

  <body>
    <div class="title">
      <h1>Hugo Devoille</h1>
    </div>
    
    <div class="container">
      <div class="project-grid">
        <div class="description">
          <p>Second-year Master's degree student at IFT, I am working on Neurosciences and Virtual Reality.
            My goal is to push further the immersion of users in VR.
            This year, I'm working on creating an hybrid brain computer interface for VR.
          </p>
          <p>Link to my others portfolio and social medias:</p>
          <div class="links">
            <a href="https://linkedin.com/in/hugodevoille" target="_blank"><img class="logo" src="..\assets\linkedin-logo.png"></a>
            <a href="https://github.com/HDevoille" target="_blank"><img class="logo" src="..\assets\github-logo.png"></a>
          </div>
        </div>
      <div class="project">
        <router-link to="hybrid_BCI">
          <img src="..\assets\EEG.jpg" alt="Hybrid Brain Computer Interface for VR">
          <h2>Hybrid Brain Computer Interface for VR</h2>
        </router-link>
      </div>
      <div class="project">
        <router-link to="/EMG_game">
          <img src="..\assets\EMG_game.png" alt="EMG controlled arcade game">
          <h2>EMG controlled arcade game</h2>
        </router-link>
      </div>
      <div class="project">
        <router-link to="/Odolux">
          <img src="..\assets\Odolux.jpg" alt="Odolux Project: Adding smell in VR">
          <h2>Odolux Project: Adding smell in VR</h2>
        </router-link>
      </div>
      <div class="project">
        <router-link to="/Muse2">
          <img src="..\assets\Muse_2.jpg" alt="Mind-State Recognition Classifier">
          <h2>Mind-State Recognition Classifier</h2>
        </router-link>
      </div>
    </div>
    </div>
  </body>
</template>

<style>
    body{
  background-color: #333;
}

  .title h1{
    position: absolute;
    top: 1%;
    left:35%;
    padding: 5px;
    background-color: #333;
    color: #fff;
    font-size: 64px;
  }

  .container {
    position: absolute;
    top: 20%;
    left: 1%;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    background-color: #333;
  }

  .project {
    text-align: center;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    transition: transform 0.2s ease-in-out;
    width: 100%;
  }

  .project:hover {
    transform: scale(1.3);
  }

  .project a {
    text-decoration: none;
    color: #333;
  }

  .project img {
    max-width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  .project h2 {
    margin-top: 10px;
    font-size: 16px;
  }

  .links {
    margin-top: 10px;
  }

  .logo{
    max-width: 100px;
    height: auto;
    border-radius: 20px;
  }

  .links a {
    text-decoration: none;
    color: #0077B5;
    margin-right: 20px; 
  }

  .links a:last-child {
    margin-right: 0; 
  }

  .description {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 20px 0;
    grid-column: 1;
    grid-row: 1 / span 2;
    width: 400px;
}

.description p {
    font-size: 16px;
    color: #333;
    margin-bottom: 50px;
}
</style>