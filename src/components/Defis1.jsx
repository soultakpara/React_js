import React from 'react'
import "../App.css"

let cadran= document.getElementById('cadran')
function submit(t){
  t.preventDefault();
  console.log(t)
  cadran.textContent=`Bienvenu ${t.target[0].value}`
}

function Defis1() {
  return (

    <>
    

    <form onSubmit={submit}>
        <label htmlFor="name">Nom</label><br />
        <input type="text"  id='Nom' placeholder='Nom'/>
         <button>Envoyer</button>
    </form>
     
    <div id='cadran'>Defis1</div>
    </>
    
  )
}

export default Defis1