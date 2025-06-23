console.log("Hello");
let newDate = null;
const handleDateChange = (e) => {
  newDate = new Date(e.target.value);
  console.log(newDate);
  const targetMili = newDate.getTime();
  console.log(targetMili);
  const currmili = Date.now();
  console.log(currmili);
  const diff = targetMili - currmili;
  console.log(diff);
};
