import React, { useState } from "react";
import "../App.css"
function Login() {
  const [score, setScore] = useState(10);
   function changeScore(){
    setScore(score+1)
   }
   function submit (e){
    e.preventDefault()
    console.log(e.target.password.value)
   }
  return (
    <>
      <button onClick={changeScore}>click {score}</button>
      <div>Login</div>

      <form onSubmit={submit} >
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email"/><br /><br />
        <label htmlFor="password" >Mot de passe</label>
        <input type="password" id="password"placeholder="Mot de passe" />
        <button>Envoyer</button>
      </form>
    </>
  );
}

export default Login;
