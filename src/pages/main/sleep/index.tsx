import { useEffect, useState } from "react";
import styles from "./Sleep.module.scss";
import sleepImg from "../../../assets/sono.png";
import classNames from "classnames";

interface Props {
  idade: number | null;
  cond: boolean;
}

export default function Sleep(props: Props) {
  const { idade, cond } = props;
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
    <div>
      {cond ? (
        <div className={styles.boxImc}>
          <h2>Quantidade de sono ideal</h2>
          <div className={classNames({
            [styles.grid]: true,
          })}>
          <img src={sleepImg} alt="" />
          <p>{sleep}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
