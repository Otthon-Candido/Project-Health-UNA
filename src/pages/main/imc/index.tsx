import { useEffect, useState } from "react";
import styles from "./Imc.module.scss";
import magroImg from "../../../assets/magro.png";
import normalImg from "../../../assets/normal.png";
import obesoImg from "../../../assets/obeso.png";
import magroColorImg from "../../../assets/magro-colorido.png";
import normalColorImg from "../../../assets/normal-colorido.png";
import obesoColorImg from "../../../assets/obeso-colorido.png";
import classNames from "classnames";

interface Props {
  altura: number | null;
  peso: number | null;
  cond: boolean;
}

export default function Imc(props: Props) {
  const { altura, peso, cond } = props;

  var [calcImc, setcalcImc] = useState<number | null>(null);
  var [imcSituation, setImcSituation] = useState<string | null>(null);
  var [magro, setMagro] = useState<boolean | null>(null);
  var [obeso, setObeso] = useState<boolean | null>(null);
  var [normal, setNormal] = useState<boolean | null>(null);
  
  useEffect(() => {
    if (peso != null && altura != null) {
      var imc = peso / (altura * altura);
      imc = parseFloat(imc.toFixed(2));
      setcalcImc(imc);

      setMagro(false);
      setNormal(false);
      setObeso(false);

      if (imc < 18.5) {
        setImcSituation("ABAIXO");
        setMagro(true);
      }

      if (imc >= 18.5 && imc <= 24.9) {
        setImcSituation("SAUDAVEL");
        setNormal(true);
      }

      if (imc > 24.9 && imc <= 29.9) {
        setImcSituation("SOBREPESO");
        setObeso(true);
      }

      if (imc > 29.9 && imc <= 34.9) {
        setImcSituation("OBESIDADE 1");
        setObeso(true);
      }

      if (imc > 34.9 && imc <= 39.9) {
        setImcSituation("OBESIDADE 2");
        setObeso(true);
      }

      if (imc > 40) {
        setImcSituation("OBESIDADE 3");
        setObeso(true);
      }
    }
  }, [altura, peso]);

  return (
    <div>
      {cond ? (
        <div className={classNames({
          [styles.boxImc]: true,
          [styles.grid]: true,
        })}>
          <p>Seu IMC é de: {calcImc}</p>
          <div className={styles.flex}>
            <div className={styles.grid}>
              <p>{magro ? <span>{imcSituation}</span> : null}</p>
              <div>
                {
                magro ? <img src={magroColorImg} alt="" /> : 
                 <img src={magroImg} alt="" /> 
                 }
              </div>
            </div>
            <div className={styles.grid}>
              <p>{normal ? <span>{imcSituation}</span> : null}</p>
              <div>
                {
                normal ? <img src={normalColorImg} alt="" /> : 
                 <img src={normalImg} alt="" /> 
                }
              </div>
            </div>
            <div className={styles.grid}>
              <p>{obeso ? <span>{imcSituation}</span> : null}</p>
              <div>
                {
                obeso ? <img src={obesoColorImg} alt="" /> : 
                 <img src={obesoImg} alt="" /> 
                }
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
