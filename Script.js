let note = [2000, 500, 100, 20, 10, 5, 1];
let note_row_length =
  document.getElementById("denom_table").rows[1].cells.length - 1;

document.getElementById("check").addEventListener("click", () => {
  let bill_amount;
  let cash_given;
  let result = [];
  bill_amount_value = document.getElementById("amount").value;

  cash_given_value = document.getElementById("cash").value;

  bill_amount = Number(bill_amount_value);
  console.log(bill_amount);
  cash_given = Number(cash_given_value);
  console.log(cash_given);
  if (
    cash_given <= bill_amount ||
    bill_amount == false ||
    cash_given == false
  ) {
    document.getElementById("message").innerHTML = "Please enter valid amount";
    for (let i = 1; i < note.length; i++) {
      document.getElementById("denom_table").rows[0].cells[i].innerHTML = "";
    }
  } else {
    for (let i = 1; i < note.length; i++) {
      document.getElementById("denom_table").rows[0].cells[i].innerHTML = "";
    }
    document.getElementById("message").innerHTML = "";
    let hold = cash_given - bill_amount;
    note.map((element) => {
      while (hold >= element) {
        result.push(element);
        hold = hold - element; //200
      }
    });
    for (let i = 1; i < note.length; i++) {
      document.getElementById("denom_table").rows[0].cells[i].innerHTML = "";
    }
    console.log(result);
    let counter = 0;
    let table_row = document.getElementById("denom_table").rows.length;
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < note.length; j++) {
        if (result[i] == note[j]) {
          let row_one_value =
            document.getElementById("denom_table").rows[0].cells[j + 1];
          console.log("row one", j, row_one_value.innerHTML == false);
          if (row_one_value.innerHTML == false) {
            console.log("entered the loop");
            counter = 0;
            counter = counter + 1;
            document.getElementById("denom_table").rows[0].cells[
              j + 1
            ].innerHTML = counter;
          } else {
            counter = counter + 1;
            document.getElementById("denom_table").rows[0].cells[
              j + 1
            ].innerHTML = counter;
          }
        }
      }
    }
    console.log(
      document.getElementById("denom_table").rows[0].cells[1].innerHTML == false
    );
  }
});
