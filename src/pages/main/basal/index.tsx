import styles from "./Basal.module.scss";
import calorias from "../../../assets/calorias.png";
import { useEffect, useState} from "react";
import ModalComponent from "../modal";

interface Props {
    idade: number | null;
    peso: number | null;
    altura: number | null;
    sexo: string | null;
    exercicio: string | null;
    cond: boolean;
    mode:string;
    setTaxaBasal: React.Dispatch<React.SetStateAction<number>>;
    taxaBasal:number;
  }

export default function Basal(props: Props){
    const {idade, peso, altura, sexo, exercicio, cond, mode, setTaxaBasal, taxaBasal } = props;

   
   
    var calcBasal
    useEffect(()=>{
        var _exercicio
        switch (exercicio) {
            case 'sedentario':
                _exercicio = 1.2
                break 
            case 'levemente':
                _exercicio = 1.375
                break 
            case 'moderado':
                _exercicio = 1.55
                break 
            case 'ativo':
                _exercicio = 1.725
                break 
            case 'extremo':
                _exercicio = 1.9
                break 
        }
        if (idade!=null && peso!=null && altura!=null && _exercicio!=null && sexo!=null){
            switch (sexo){
                case 'Masculino':
                    calcBasal = _exercicio*(655 + ((9.6 * peso) + (1.8 * (altura*100)) - (4.7 * idade)))
                    calcBasal = parseFloat(calcBasal.toFixed(2))
                    setTaxaBasal(calcBasal)
                break
                case 'Feminino':
                    calcBasal = _exercicio*(66 + ((13.7 * peso) + (5 * (altura*100)) - (6.8 * idade)))
                    calcBasal = parseFloat(calcBasal.toFixed(2))
                    setTaxaBasal(calcBasal)
                break
            }}

    },[idade, peso, altura, sexo, exercicio])

  return (
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
          {cond ? (
        <div className={styles.boxImc}>
        <div className={styles.modal}> 
          <ModalComponent   mode={mode} type={"basal"}/> 
          </div>
          
        <h2 className={styles.titulo }>Seu Gasto Calórico Basal é de: {taxaBasal}</h2>
        <div className={styles.dflex}>
        <img className={styles.img} src={calorias} alt="" />
        </div>
        </div>
             ) : null}
    </div>
  )

}