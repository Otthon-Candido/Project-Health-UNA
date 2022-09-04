import { useEffect, useState } from "react";
import styles from "./Imc.module.scss";
import magroImg from "../../../assets/magro.svg";
import normalImg from "../../../assets/normal.svg";
import obesoImg from "../../../assets/obeso-colorido.svg";

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
      var imc = peso / (altura/100 * altura/100);
      imc = parseFloat(imc.toFixed(2));
      setcalcImc(imc);

      setMagro(false);
      setNormal(false);
      setObeso(false);

      if (imc < 18.5) {
        setImcSituation("Você está abaixo do Peso Ideal");
        setMagro(true);
      }

      if (imc >= 18.5 && imc <= 24.9) {
        setImcSituation("Você está no peso ideal");
        setNormal(true);
      }

      if (imc > 24.9 && imc <= 29.9) {
        setImcSituation("Você está com sobrepeso");
        setObeso(true);
      }

      if (imc > 29.9 && imc <= 34.9) {
        setImcSituation("Você está com obesidade nivel 1");
        setObeso(true);
      }

      if (imc > 34.9 && imc <= 39.9) {
        setImcSituation("Você está com obesidade nivel 2");
        setObeso(true);
      }

      if (imc > 40) {
        setImcSituation("Você está com obesidade nivel 3");
        setObeso(true);
      }
    }
  }, [altura, peso]);

  return (
    <div>
      <p>Seu IMC é de: {calcImc}</p>
      <div className={styles.flex}>
        <div>
          <p>{magro ? <div>{imcSituation}</div> : null}</p>
          <img src={magroImg} alt="" />
        </div>
        <div>
          <p>{normal ? <div>{imcSituation}</div> : null}</p>
          <img src={normalImg} alt="" />
        </div>
        <div>
          <p>{obeso ? <div>{imcSituation}</div> : null}</p>
          <img src={obesoImg} alt="" />
        </div>
      </div>
    </div>
  );
}
