import { useEffect, useState } from "react";
import styles from "./Water.module.scss";
import Bottle from "../../../assets/garrafa-de-agua.png";
import WaterGlass from "../../../assets/copo-de-agua.png";
import Example from "../modal";

interface Props {
  peso: number | null;
  cond: boolean;
  mode:string;
}

export default function Water(props: Props) {
  const [litros, setLitros] = useState<string | null>(null);
  const [copos, setCopos] = useState<string | null>(null);
  const [garrafas, setGarrafas] = useState<string | null>(null);

  const { peso, cond,mode } = props;

  useEffect(() => {
    if (peso != null) {
      var totalLitros = (peso * 35) / 1000;
      var totalCopos = (peso * 35) / 300;
      var totalGarrafas = (peso * 35) / 500;

      if (
        parseFloat(totalLitros.toFixed(1)) -
          parseFloat(totalLitros.toFixed(0)) ===
        0
      ) {
        setLitros(totalLitros.toFixed(0));
      } else {
        setLitros(totalLitros.toFixed(1));
      }

      if (
        parseFloat(totalCopos.toFixed(1)) -
          parseFloat(totalCopos.toFixed(0)) ===
        0
      ) {
        setCopos(totalCopos.toFixed(0));
      } else {
        setCopos(totalCopos.toFixed(1));
      }

      if (
        parseFloat(totalGarrafas.toFixed(1)) -
          parseFloat(totalGarrafas.toFixed(0)) ===
        0
      ) {
        setGarrafas(totalGarrafas.toFixed(0));
      } else {
        setGarrafas(totalGarrafas.toFixed(1));
      }

    }
  }, [peso]);

  return (
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
      {cond ? (
        <div className={styles.boxImc}>
          
          <div style={{height: "10px"}} className="w-100 d-flex justify-content-end">   
          <Example   mode={mode} type={"water"}/> 
          </div>
          
            <div className={styles.conteudoImc}>
              <p className={styles.titulo}>Seu consumo ideal é de: {litros} litros de água por dia</p>
              <div className={styles.dflex}>
                <p className={styles.textWater}>{copos} copos de 300 ml por dia</p>
                <img className={styles.bottleImg} src={WaterGlass} alt="" />
                <hr />
                <img src={Bottle} alt="" />
                <p className={styles.textWater}>{garrafas} garrafas de 500 ml por dia</p>
              </div> 
            </div> 
        </div>
      ) : null}
    </div>
  );
}
