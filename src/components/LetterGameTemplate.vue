<template>
  <div>
    <button 
      v-show="!hasQuizStarted"
      class="startButton" 
      @click="startQuiz"
    >
      Let's Begin!
    </button>

    <LetterGameQuestion 
      v-show="hasQuizStarted"
      v-if="this.correctAnswers.length < 15"
      @record="onRecordOfQuestion"     
    />

    

    <button
        v-show="hasBeenAnswered"
        @click="`<LetterGameQuestion>`"
      >
      Onward!
    </button>

  </div>
</template>

<script>
import LetterGameQuestion from "./LetterGameQuestion";

export default {
  name: "LetterGameTemplate",
  components: {
    LetterGameQuestion
  },
  data: () => {
    return {
      hasQuizStarted: false,
      correctAnswers: [],
      incorrectAnswers: [],
      hasBeenAnswered: false
    };
  },
  methods: {
    startQuiz() {
      this.hasQuizStarted = !this.hasQuizStarted;
      this.$emit("gameStarted");
    },
    onRecordOfQuestion(record) {
      this.hasBeenAnswered = true;
      if (record.isCorrect === true) {
        alert("Hurray");
        this.correctAnswers.push(record.selectedAnswer);
      } else {
        alert("uh-oh");
        this.incorrectAnswers.push(record.question);
      }
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand");

button.startButton {
  margin: auto;
  display: flex;
  align-self: center;
  color: rgb(76, 30, 80);
  font-family: "Patrick Hand", cursive;
  font-size: 2.5em;
  font-weight: bold;
}
</style>


