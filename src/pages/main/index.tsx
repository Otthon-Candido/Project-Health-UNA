import { useState } from "react";
import Form from "./form";
import Imc from "./imc";
import styles from "./Main.module.scss";
import Sleep from "./sleep";
import Water from "./water";
import 'bootstrap/dist/css/bootstrap.min.css';
import Basal from "./basal";
import BrandExample from "./header";
import ModalComponent from "./modal";
import Energetic from "./energetic";
import Carousel from 'react-bootstrap/Carousel';

export default function Main() {
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [objetivo, setObjetivo] = useState<string>("");
  const [cond, setCond] = useState<boolean>(false);
  const [exercicio, setExercicio] = useState<string>("");
  const [mode, setMode] = useState<string>("light");
  const [initial, setInitial] = useState<string>('initial');
  const [taxaBasal, setTaxaBasal] = useState<number>(0);


  return (

<section className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
  <div className={styles.sidebar}>
  <header >
<BrandExample
setMode={setMode}
mode={mode}
/>

  </header>
  </div>
    <body>
    <div className={styles.container}>
      <div className={`${styles["bigSize"]}`}>
      <div  className={styles.water}>
      <Water peso={peso} cond={cond} mode={mode} />
      </div>
      <div className={styles.sleep}>
      <Sleep idade={idade} cond={cond} mode={mode} />
      </div>
      <div className={styles.basal}>
      <Basal taxaBasal={taxaBasal} setTaxaBasal={setTaxaBasal} idade={idade} peso={peso} altura={altura} sexo={sexo} exercicio={exercicio} cond={cond} mode={mode}/>
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
      <div className={`${styles["bigSize"]}`}>
      <div className={styles.imc}>
      <Imc peso={peso} altura={altura} cond={cond} mode={mode}/>
      </div>
      <Energetic objetivo={objetivo} mode={mode} taxaBasal={taxaBasal} cond={cond}></Energetic>
      </div>

      {cond?(
    <Carousel  className={`${styles["size"]} ${styles["carousel"]}`}>
      <Carousel.Item>
      <Water peso={peso} cond={cond} mode={mode} />
        <Carousel.Caption>
       
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Sleep idade={idade} cond={cond} mode={mode} />

        <Carousel.Caption>
        
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Basal taxaBasal={taxaBasal} setTaxaBasal={setTaxaBasal} idade={idade} peso={peso} altura={altura} sexo={sexo} exercicio={exercicio} cond={cond} mode={mode}/>

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Imc peso={peso} altura={altura} cond={cond} mode={mode}/>
        <Carousel.Caption>
       
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Energetic objetivo={objetivo} mode={mode} taxaBasal={taxaBasal} cond={cond}></Energetic>
        <Carousel.Caption>
       
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    ):null}
    </div>
    </body>


    <ModalComponent  mode={mode} type={initial}/> 
    </section>
  );
}
