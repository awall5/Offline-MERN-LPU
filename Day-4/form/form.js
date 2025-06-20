const op = document.getElementById("greetings");

const handleUserName = (e) => {
  console.log("typed");
  console.log(".........");
  console.log(e);
  const ele = e.target;
  console.log(ele.value);
  op.innerText = ` Hello ${ele.value} !
    
    `;
};

const handleformsubmit = (e) => {
  e.preventDefault();
  console.log(e);

  const input1 = e.target[0];
  const input2 = e.target[1];
  const input3 = e.target[2];

  const User = e.target.username.value;
  const email = e.target.email.value;

  if (!email.endsWith("@lpu.in")) {
    {
      alert("Please use LPU email");
    }
  }

  console.log(User, email, input3.value);
};
