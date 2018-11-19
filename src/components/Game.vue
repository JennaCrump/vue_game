<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <ul>
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
    <LetterGameTemplate v-if="currentSelectedGame === 'letter_game'"/>
  </div>
</template>

<script>
import LetterGameTemplate from "./LetterGameTemplate";

export default {
  name: "Game",
  props: {
    msg: { type: String }
  },
  components: {
    LetterGameTemplate
  },
  data() {
    return {
      currentSelectedGame: null
    };
  },
  methods: {
    onClickOfGameChoice(gameType) {
      this.currentSelectedGame = gameType;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 0; */
}
/* li {
  padding-left: 1em;
  padding-right: 1em;
} */

button {
  padding: 0;
  border: none;
  background: none;
}
</style>
