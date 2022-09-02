import { useState } from "react";
import Form from "./form";
import styles from "./Main.module.scss";

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
      <div> {sexo}</div>
      <div> {idade}</div>
      <div> {peso}</div>
      <div> {altura}</div>
      <div> {objetivo}</div>
    </div>
  );
}
