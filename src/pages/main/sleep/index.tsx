import { useEffect, useState } from "react";
import styles from "./Sleep.module.scss";
import sleepImg from "../../../assets/sono.png";
import classNames from "classnames";
import ModalComponent from "../modal";

interface Props {
  idade: number | null;
  cond: boolean;
  mode:string
}

export default function Sleep(props: Props) {
  const { idade, cond, mode } = props;
  const [sleep, setSleep] = useState<string | null>(null);

  useEffect(() => {
    var typeIdade;
    if (idade != null) {
      if (idade <= 5) {
        typeIdade = "crianca";
      }
      if (idade <= 13 && idade > 5) {
        typeIdade = "pre-adolescente";
      }
      if (idade <= 17 && idade > 14) {
        typeIdade = "adolescente";
      }
      if (idade <= 64 && idade >= 18) {
        typeIdade = "adulto";
      }
      if (idade > 64) {
        typeIdade = "idoso";
      }
    }

    switch (typeIdade) {
      case "crianca":
        setSleep("Durma por 10 a 14 horas por noite");
        break;

      case "pre-adolescente":
        setSleep("Durma por 9 a 11 horas por noite");

        break;

      case "adolescente":
        setSleep("Durma por 8 a 9 horas por noite");

        break;

      case "adulto":
        setSleep("Durma por 8 a 9 horas por noite");

        break;

      case "idoso":
        setSleep("Durma por 7 a 8 horas por noite");

        break;
    }
  }, [idade]);

  return (
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]} ${["w-100 d-flex justify-content-end"]}`}>
      {cond ? (
        <div className={styles.boxImc}>
        <div  className={styles.modal}> 
          <ModalComponent   mode={mode} type={"sleep"}/> 
          </div>
        <div className="d-grid  justify-content-center align-items-center">
      
          <h2 className={styles.titulo}>Quantidade de sono ideal</h2>
          <div className={classNames({
            [styles.grid]: true,
          })}>
          <img src={sleepImg} alt="" />
          <p>{sleep}</p>
          </div>
        </div>
        </div>
      ) : null}
    </div>
  );
}
