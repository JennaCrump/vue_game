<template>
    <div>
        <h1>Which is the matching lowercase letter for: </h1>
        <div class="question">
          {{ getQuestion }}
        </div>
      <ul>
        <li v-for="(item, index) in shuffleAnswers" :key="index">
          <button @click="getResults(item)">
            {{ item }}
          </button>
        </li>
      </ul>
      <button :disabled="disableOnwardButton">
        Onward!
      </button>
    </div>
</template>

<script>
export default {
  name: "LetterGameQuestion",
  data() {
    return {
      disableOnwardButton: true
    };
  },
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
      if (this.getQuestion.toLowerCase() === answer) {
        // this.disableOnwardButton = false;
        this.$emit("correctAnswer");
        console.log("YES");
      } else {
        console.log("NO");
      }
    }
  }
};
</script>
