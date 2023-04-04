const monday = {
  day: "mon",
  amount: "$17.45",
};
const tuesday = {
  day: "tue",
  amount: "$34.91",
};
const wednesday = {
  day: "wed",
  amount: "$52.36",
};
const thursday = {
  day: "thu",
  amount: "$31.07",
};
const friday = {
  day: "fri",
  amount: "$23.39",
};
const saturday = {
  day: "sat",
  amount: "$43.28",
};
const sunday = {
  day: "sun",
  amount: "$25.48",
};

const daymon = document.querySelector(".day-mon");
const monamount = document.querySelector(".amount-mon");
daymon.innerHTML = monday.day;
monamount.innerHTML = monday.amount;

const daytue = document.querySelector(".day-tue");
const tueamount = document.querySelector(".amount-tue");
daytue.innerHTML = tuesday.day;
tueamount.innerHTML = tuesday.amount;

const daywed = document.querySelector(".day-wed");
const wedamount = document.querySelector(".amount-wed");
daywed.innerHTML = wednesday.day;
wedamount.innerHTML = wednesday.amount;

const daythu = document.querySelector(".day-thu");
const thuamount = document.querySelector(".amount-thu");
daythu.innerHTML = thursday.day;
thuamount.innerHTML = thursday.amount;

const dayfri = document.querySelector(".day-fri");
const friamount = document.querySelector(".amount-fri");
dayfri.innerHTML = friday.day;
friamount.innerHTML = friday.amount;

const daysat = document.querySelector(".day-sat");
const satamount = document.querySelector(".amount-sat");
daysat.innerHTML = saturday.day;
satamount.innerHTML = saturday.amount;

const daysun = document.querySelector(".day-sun");
const sunamount = document.querySelector(".amount-sun");
daysun.innerHTML = sunday.day;
sunamount.innerHTML = sunday.amount;
