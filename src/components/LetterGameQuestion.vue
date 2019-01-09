<template>
    <div>
      <h1>
        Which is the matching lowercase letter for: 
      </h1>
      <div 
        class="question"
      >
        {{ getQuestion }}
      </div>
      <ul>
        <li 
          v-for="(item, index) in shuffleAnswers" :key="index"
          >
            <button 
              @click="getResults(item)"
            >
              {{ item }}
            </button>
        </li>
      </ul>
      
    </div>
</template>

<script>
export default {
  name: "LetterGameQuestion",
  computed: {
    getValidAlphaNumber() {
      return this.getRandomNumber(0, 25);
    },
    getCapitalLetterAlphabet() {
      return this.getAlphabet("A", "Z");
    },
    getQuestion() {
      return this.getCapitalLetterAlphabet[this.getValidAlphaNumber];
    },
    answers() {
      const answers = [
        this.getQuestion.toLowerCase(),
        this.getAlphabet("A", "Z")[
          Math.floor(Math.random() * 26)
        ].toLowerCase(),
        this.getAlphabet("A", "Z")[
          Math.floor(Math.random() * 26)
        ].toLowerCase(),
        this.getAlphabet("A", "Z")[Math.floor(Math.random() * 26)].toLowerCase()
      ];

      return answers;
    },
    shuffleAnswers() {
      return this.sortArray(this.answers);
    }
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getAlphabet(start, stop) {
      const alphabet = [];
      for (
        var i = start.charCodeAt(0), end = stop.charCodeAt(0);
        i <= end;
        ++i
      ) {
        alphabet.push(String.fromCharCode(i));
      }
      return alphabet;
    },
    sortArray(answers) {
      const answerArray = answers;
      answerArray.sort(function() {
        return 0.5 - Math.random();
      });
      return answerArray;
    },
    getResults(answer) {
      const recordObject = {
        question: this.getQuestion,
        selectedAnswer: answer,
        isCorrect: this.getQuestion.toLowerCase() === answer,
        answerRecorded: true
      };
      this.$emit("record", recordObject);
    },
    nextQuestion() {}
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand");

.question {
  text-align: center;
  color: rgb(76, 30, 80);
  font-family: "Patrick Hand", cursive;
  font-size: 2.5em;
  font-weight: bold;
}

ul {
  list-style-type: none;
}

button {
  padding: 1em;
  border: none;
  background: none;
  color: rgb(76, 30, 80);
  font-family: "Patrick Hand", cursive;
  font-size: 2em;
}
</style>

