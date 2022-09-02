import { useEffect, useState } from "react";
import styles from "./Water.module.scss";
import Bottle from "../../../assets/bottle.svg";
import WaterGlass from "../../../assets/waterGlass.svg";

interface Props {
  peso: number | null;
}

export default function Water(props: Props) {
  const [litros, setLitros] = useState<string | null>(null);
  const [copos, setCopos] = useState<string | null>(null);
  const [cond, setCond] = useState<boolean | null>(false);
  const { peso } = props;

  useEffect(() => {
    if (peso != null) {
      var totalLitros = (peso * 35) / 1000;
      var totalCopos = (peso * 35) / 300;

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

      setCond(true);
    }
  }, [peso]);

  return (
    <div>
      {cond ? (
        <div>
          <img src={Bottle} alt="" />
          <p>Seu consumo ideal é de {litros} litros de água por dia</p>
          <img src={WaterGlass} alt="" />
          <p>{copos} copos de 300 ml por dia</p>
        </div>
      ) : null}
    </div>
  );
}
