<template>
  <div id="app">
    <Game msg="AMELIA"/>
    <span class="bird"><img alt="little bird" src="./assets/bird.png"></span>
  </div>
</template>

<script>
import Game from "./components/Game.vue";

export default {
  name: "app",
  components: {
    Game
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand");
body {
  background: rgba(16, 158, 177, 0.698);
}

h1 {
  text-align: center;
  color: rgb(76, 30, 80);
  font-family: "Patrick Hand", cursive;
}

span {
  font-size: 2em;
  padding: 0.3em;
}

span:hover {
  text-transform: lowercase;
  color: rgb(223, 94, 154);
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 0;
}

li {
  padding-left: 1em;
  padding-right: 1em;
}

.bird {
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
  margin-right: -5px;
}
</style>
