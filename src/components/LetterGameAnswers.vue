<template>
     <div>
         {{ getAnswer1 }}
     </div>
</template>

// <script>
// import LetterGameQuestion from "./LetterGameQuestion";
// export default {
//   name: "LetterGameAnswers",
//   computed: {
//     getAnswer1() {
//       this.getQuestion.toLowercase();
//     }
//   },
//   methods: {
//     getRandomNumber(min, max) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     },
//     getAlphabet(start, stop) {
//       const alphabet = [];
//       for (
//         var i = start.charCodeAt(0), end = stop.charCodeAt(0);
//         i <= end;
//         ++i
//       ) {
//         alphabet.push(String.fromCharCode(i));
//       }
//       return alphabet;
//     }
//   }
// };
//
</script>