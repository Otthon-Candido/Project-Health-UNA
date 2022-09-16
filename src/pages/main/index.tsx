import { useState } from "react";
import Form from "./form";
import Imc from "./imc";
import styles from "./Main.module.scss";
import Sleep from "./sleep";
import Water from "./water";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [objetivo, setObjetivo] = useState<string>("");
  const [cond, setCond] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div>
      <div  className={styles.water}>
      <Water peso={peso} cond={cond} />
      </div>
      <div className={styles.sleep}>
      <Sleep idade={idade} cond={cond} />
      </div>
      </div>
      <div className={styles.form}>
      <Form
        setSexo={setSexo}
        setIdade={setIdade}
        setPeso={setPeso}
        setAltura={setAltura}
        setObjetivo={setObjetivo}
        setCond={setCond}
      />
      </div>
      <div className={styles.imc}>
      <Imc peso={peso} altura={altura} cond={cond} />
      </div>
    </div>
  );
}
