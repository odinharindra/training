var presentYear = 2023;

let presentMonth;
consolePresentYear();
consolePresentYear2();
//
//
//
//
//
//

function consolePresentYear() {
  // =>
  console.log("presentYear: ", presentYear);

  presentMonth = "August";
  chilFunction1();

  function chilFunction1() {
    console.log(presentMonth);
  }
}

function consolePresentYear2() {
  console.log("2 presentYear: ", presentYear);
  console.log(presentMonth);
}
