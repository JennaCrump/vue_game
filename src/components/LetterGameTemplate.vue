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
      @correctAnswer="onCorrectAnswer"
    />

    <!-- <LetterGameAnswers v-if="hasQuizStarted"/> -->
  </div>
</template>

<script>
import LetterGameQuestion from "./LetterGameQuestion";
// import LetterGameAnswers from "./LetterGameAnswers";

export default {
  name: "LetterGameTemplate",
  components: {
    LetterGameQuestion
    // LetterGameAnswers
  },
  data: () => {
    return {
      hasQuizStarted: false
    };
  },
  methods: {
    startQuiz() {
      this.hasQuizStarted = !this.hasQuizStarted;
    },
    onCorrectAnswer() {
      alert("Hurray");
    }
  }
};
</script>
