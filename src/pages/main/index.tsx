import { useState } from "react";
import Form from "./form";
import Imc from "./imc";
import styles from "./Main.module.scss";
import Sleep from "./sleep";
import Water from "./water";

export default function Main() {
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [objetivo, setObjetivo] = useState<string>("");
  const [cond, setCond] = useState<boolean>(false);

  return (
    <div>

      <Form
        setSexo={setSexo}
        setIdade={setIdade}
        setPeso={setPeso}
        setAltura={setAltura}
        setObjetivo={setObjetivo}
        setCond={setCond}
      />
            <Water peso = {peso} cond = {cond}/>
            <Sleep idade = {idade} cond = {cond}/>
            <Imc   peso = {peso} altura = {altura} cond = {cond}/> 
    </div>
  );
}
