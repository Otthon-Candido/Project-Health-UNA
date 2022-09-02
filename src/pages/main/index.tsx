import { useState } from "react";
import Form from "./form";
import styles from "./Main.module.scss";
import Water from "./water";

export default function Main() {
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [objetivo, setObjetivo] = useState<string>("");

  return (
    <div>

      <Form
        setSexo={setSexo}
        setIdade={setIdade}
        setPeso={setPeso}
        setAltura={setAltura}
        setObjetivo={setObjetivo}
      />
            <Water peso = {peso}/>
    </div>
  );
}
