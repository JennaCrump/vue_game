<template>
  <div>
    <h1 
      v-if="!hasGameStarted"
      class="title"
    >
      {{ name }}
    </h1>
    <ul
      v-if="!hasGameStarted"
    >
        <li>
            <button @click="onClickOfGameChoice('letter_game')">
                <font-awesome-layers class="fa-stack fa-2x" style="color: rgb(223, 94, 154)">
                  <font-awesome-icon icon="certificate" class="fa-stack-2x" />
                  <font-awesome-icon :icon="['fab', 'amilia']" class="fa-stack-1x" style="color:rgba(16, 158, 177, 0.698)"/>
                </font-awesome-layers>
            </button>
        </li>
        <li>
            <button @click="onClickOfGameChoice('number_game')">
                <font-awesome-layers class="fa-stack fa-2x" style="color: rgb(223, 94, 154)">
                  <font-awesome-icon icon="certificate" class="fa-stack-2x" />
                  <font-awesome-icon :icon="['fab', 'slack-hash']" class="fa-stack-1x" style="color:rgba(16, 158, 177, 0.698)"/>
                </font-awesome-layers>
            </button>
        </li>
        <li>
            <button @click="onClickOfGameChoice('sight_word_game')">
                <font-awesome-layers class="fa-stack fa-2x" style="color: rgb(223, 94, 154)">
                  <font-awesome-icon icon="certificate" class="fa-stack-2x" />
                  <font-awesome-icon icon="glasses" class="fa-stack-1x" style="color:rgba(16, 158, 177, 0.698)"/>
                </font-awesome-layers>
            </button>
        </li>
    </ul>

    <LetterGameTemplate 
      v-if="currentSelectedGame === 'letter_game'"
      @gameStarted="onStartOfGame"
    />
  </div>
</template>

<script>
import LetterGameTemplate from "./LetterGameTemplate";

export default {
  name: "Game",
  props: {
    name: { type: String }
  },
  components: {
    LetterGameTemplate
  },
  data() {
    return {
      currentSelectedGame: null,
      hasGameStarted: false
    };
  },
  methods: {
    onClickOfGameChoice(gameType) {
      this.currentSelectedGame = gameType;
    },
    onStartOfGame() {
      this.hasGameStarted = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}

button {
  padding: 0;
  border: none;
  background: none;
}
</style>
