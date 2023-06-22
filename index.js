function baitap1() {
  let number1 = +document.getElementById("point1").value;
  let number2 = +document.getElementById("point2").value;
  let number3 = +document.getElementById("point3").value;
  let area = +document.getElementById("area").value;
  let person = +document.getElementById("person").value;
  let avgpoint = document.getElementById("avgpoint").value;

  let ketQua = ex1(number1, number2, number3, area, person, avgpoint);
  document.getElementById("tongDiem").innerHTML = ketQua;
}

function ex1(number1, number2, number3, area, person, avgpoint) {
  let ketQua = "";
  let tongDiem = number1 + number2 + number3 + area + person;
  if (number1 <= 0 || number2 <= 0 || number3 <= 0) {
    ketQua = "Ban da rot ki thi ";
  } else if (avgpoint >= tongDiem) {
    ketQua = `Bạn đã Rớt, tong diem: ${tongDiem}`;
  } else if (avgpoint < tongDiem) {
    ketQua = `Ban đã Đậu, tong diem: ${tongDiem}`;
  }
  return ketQua;
}

//Bài tập 2
function baitap2() {
  let name = document.getElementById("name").value;
  let electric = +document.getElementById("electric").value;

  let price = pay(electric, 500, 650, 850, 1100, 1300);
  document.getElementById("soTien").innerHTML = price.toLocaleString();
}

function pay(electric, price1, price2, price3, price4, price5) {
  let price = 0;
  if (electric <= 50) {
    price += price1;
  } else if (electric <= 100) {
    price += 50 * price1 + (electric - 50) * price2;
  } else if (electric <= 200) {
    price += 50 * price1 + 50 * price2 + (electric - 100) * price3;
  } else if (electric <= 350) {
    price +=
      50 * price1 + 50 * price2 + 100 * price3 + (electric - 200) * price4;
  } else {
    price +=
      50 * price1 +
      50 * price2 +
      100 * price3 +
      150 * price4 +
      (electric - 350) * price5;
  }
  return price;
}


//Bài tập 3

function baitap3() {
  let name2 = document.getElementById("name2").value;
  let total = +document.getElementById("total").value;
  let human = +document.getElementById("human").value;

  let firsttax = total - 4e6 - human * 1.6e6;
  let taxPay = tax(firsttax, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35);
  display(taxPay);
}
function tax(firsttax, per1, per2, per3, per4, per5, per6, per7) {
  let taxPay = 0;

  if (firsttax <= 60e6) {
    taxPay += firsttax * per1;
  } else if (firsttax <= 120e6) {
    taxPay += 60e6 * per1 + (firsttax - 60e6) * per2;
  } else if (firsttax <= 210e6) {
    taxPay += 60e6 * per1 + 60e6 * per2 + (firsttax - 120e6) * per3;
  } else if (firsttax <= 384e6) {
    taxPay +=
      60e6 * per1 + 60e6 * per2 + 90e6 * per3 + (firsttax - 210e6) * per4;
  } else if (firsttax <= 624e6) {
    taxPay +=
      60e6 * per1 +
      60e6 * per2 +
      90e6 * per3 +
      174e6 * per4 +
      (firsttax - 384e6) * per5;
  } else if (firsttax <= 960e6) {
    taxPay +=
      60e6 * per1 +
      60e6 * per2 +
      90e6 * per3 +
      174e6 * per4 +
      240e6 * per5 +
      (firsttax - 624e6) * per6;
  } else {
    taxPay +=
      60e6 * per1 +
      60e6 * per2 +
      90e6 * per3 +
      174e6 * per4 +
      240e6 * per5 +
      336e6 * per6 +
      (firsttax - 624e6) * per7;
  }
  return taxPay;
}

function display(taxPay) {
  document.getElementById("tinhThue").innerHTML = taxPay.toLocaleString();
}


// bài tập 4
function changeSelection() {
  let InputCustomer = document.getElementById("typeCustomer").value;

  if (InputCustomer === "business") {
    document.getElementById("input-connect").style.display = "block";
  } else {
    document.getElementById("input-connect").style.display = "none";
  }
}

function calInter(p1, p2, p3) {
  let numbInterS = 1;
  numbInterS = +document.getElementById("enterConnect").value;
  let numbInterV = +document.getElementById("enterVip").value;
  let internet = 0;

  if (numbInterS > 10) {
    internet = p1 + p2 + p3 * numbInterV + (numbInterS - 10) * 5;
  } else {
    internet = p1 + p2 + p3 * numbInterV;
  }
  return internet;
}

function resultInter() {
  let InputCustomer = document.getElementById("typeCustomer").value;
  let showInter = "";

  if (InputCustomer === "business") {
    showInter = calInter(15, 75, 50);
  } else {
    showInter = calInter(4.5, 20.5, 7.5);
  }

  
  return (document.getElementById(
    "output-Inter"
  ).innerHTML += ` phải đóng số tiền là ${showInter}$`);
}

function codeCust() {
  return document.getElementById("input-code").value;
}