import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Importe o BrowserRouter
import Notas from './components/notas'

function App() {
  return (
    <div className="App">
      <Router> {}
        <Notas />
      </Router>
    </div>


/*
outra opção que fiz tambem alem dessa(oc deixa pra deixar as duas): 
Obrigada sandrinha<3 vamos sentir muito sua falta e das suas aulas, até o baile!!:)
import { useState } from 'react'
import './App.css'
import { useLocalStorage } from "@uidotdev/usehooks"

export default function Home() {
    const [notas, setnotas] = useLocalStorage("notas", []) //lista
    const [numnota, setnumnota] = useState("") //nometarefa,  setnometarefa

    function adicionarnotas() {


        if (numnota == "") {
            return
        } else {
            setnotas([...notas, {
                id: notas.length + 1,
                numnota: notas,
                concluida: false
            }])
            setnumnota("")
        }
    }
    function enter(e){
        if(e.key == "Enter"){
            adicionarnotas()
        }
    }
    function excluir() {
      const temporario = notas.filter((tarefa) => {
          if (nota.id == id) {
              return false
          }
          return true
      })
      setlista(temporario)
  }

    return (
    
        <div className="grid grid-rows-[auto_1fr] h-screen">
         
           <div className="flex justify-center gap-4 p-4 bg-secondary">
           <h1>Adicionar Notas</h1>
           <input className="input" type="text" placeholder="Digite a nota:" id="tarefa" value={setnumnota} onChange={(e) => setnumnota(e.target.value)} onKeyDown={(e) => enter(e)}/>
            <button  className="btn" onClick={adicionarnotas} >Adicionar</button>
            <button onClick={excluir}>X</button>
           </div>
      
        </div>
    )
}


*/
  );
}

export default App;
