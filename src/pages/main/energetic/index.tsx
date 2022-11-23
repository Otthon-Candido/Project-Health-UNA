import proteinas from "../../../assets/proteina.png";
import carboidratos from "../../../assets/carboidratos.png";
import lipidios from "../../../assets/gordura.png";
import styles from "./Energetic.module.scss";
import './Energetic.css';
import { useEffect, useState } from "react";
import ModalComponent from "../modal";

interface Props {
    taxaBasal: number;
    objetivo: string ;
    mode:string;
    cond:boolean;
  }


export default function Energetic(props: Props) {
  
    const { mode, objetivo, taxaBasal,cond } = props;
    const [carboidratoValue, setCarboidratoValue] = useState<number>(0);
    const [lipidioValue, setLipidioValue] = useState<number>(0);
    const [proteinaValue, setProteinaValue] = useState<number>(0);

   

    useEffect(() => {
        switch(objetivo){
            case 'Emagrescer':
              var value = Math.round(((taxaBasal*0.8)/3));
              var valueCarboidrato = Math.round(value/4);
              var valueLipidio = Math.round(value/9);
              var valueProteina = Math.round(value/4);
                setCarboidratoValue(valueCarboidrato);
                setLipidioValue(valueLipidio);
                setProteinaValue(valueProteina);
                break;
    
            case 'Manter':
                var value = Math.round((taxaBasal)/3)
                var valueCarboidrato = Math.round(value/4);
                var valueLipidio = Math.round(value/9);
                var valueProteina = Math.round(value/4);
                  setCarboidratoValue(valueCarboidrato);
                  setLipidioValue(valueLipidio);
                  setProteinaValue(valueProteina);
                break;
    
            case 'Engordar':
                var value = Math.round(((taxaBasal*1.2)/3))
                var valueCarboidrato = Math.round(value/4);
                var valueLipidio = Math.round(value/9);
                var valueProteina = Math.round(value/4);
                  setCarboidratoValue(valueCarboidrato);
                  setLipidioValue(valueLipidio);
                  setProteinaValue(valueProteina);
                break;
    
        }
      }, [taxaBasal, objetivo]);

  return (
<>
<div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
{cond ? (
     <div className={styles.boxImc}>
<div className={styles.modal}> 
<ModalComponent   mode={mode} type={"basal"}/> 
</div>
<h3 className={styles.titulo}>Quantidade que deve consumir de:</h3>

<div className="d-flex align-items-center">
<img className={styles.img} src={proteinas} alt="" />
<h4 className={styles.text} >Proteina:</h4>
<p>{proteinaValue} gramas/dia</p>
</div>

<div className="d-flex align-items-center">
<img className={styles.img} src={carboidratos} alt="" />
<h4 className={styles.text} >Carboidrato:</h4>
<p>{carboidratoValue} gramas/dia</p>
</div>

<div className="d-flex align-items-center">
<img className={styles.img} src={lipidios} alt="" />
<h4 className={styles.text} >Lipídios:</h4>
<p>{lipidioValue} gramas/dia</p>
</div>
</div>
):null}
</div>
</>
  );
}
