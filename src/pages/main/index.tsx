import { useState } from "react";
import Form from "./form";
import Imc from "./imc";
import styles from "./Main.module.scss";
import Sleep from "./sleep";
import Example from "./modal";
import Water from "./water";
import 'bootstrap/dist/css/bootstrap.min.css';
import Basal from "./basal";
import BrandExample from "./header";

export default function Main() {
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [objetivo, setObjetivo] = useState<string>("");
  const [cond, setCond] = useState<boolean>(false);
  const [exercicio, setExercicio] = useState<string>("");
  const [mode, setMode] = useState<string>("light");

  return (

<section className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
  <header>
<BrandExample
setMode={setMode}
mode={mode}
/>
  </header>
    <body>
    <div className={styles.container}>
      <div>
      <div  className={styles.water}>
      <Water peso={peso} cond={cond} mode={mode} />
      </div>
      <div className={styles.sleep}>
      <Sleep idade={idade} cond={cond} mode={mode} />
      </div>
      <div className={styles.basal}>
      <Basal idade={idade} peso={peso} altura={altura} sexo={sexo} exercicio={exercicio} cond={cond} mode={mode}/>
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
        setExercicio={setExercicio}
        mode={mode}
      />
      </div>
      <div className={styles.imc}>
      <Imc peso={peso} altura={altura} cond={cond} mode={mode}/>
      </div>
    </div>
    </body>
    </section>
  );
}
