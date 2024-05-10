// let s = "PPALLP";
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

let s = "PPALLL";
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

// let s = "LALL";
// Output : true;

var checkRecord = function (s) {
  let absentCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === "L" && s[i + 1] === "L" && s[i] === "L") return false;
    if (s[i] === "A") {
      absentCount++;
      if (absentCount >= 2) return false;
    }
  }
  return true;
};
console.log(checkRecord(s));

// var checkRecord = function (s) {
//   if (s.includes("LLL")) return false;
//   let absentCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "A") absentCount++;
//     if (absentCount >= 2) return false;
//   }
//   return true;
// };
// console.log(checkRecord(s));
