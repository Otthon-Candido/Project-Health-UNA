import styles from "./Form.module.scss";

interface Props {
  setSexo: React.Dispatch<React.SetStateAction<string>>;
  setIdade: React.Dispatch<React.SetStateAction<number | null>>;
  setPeso: React.Dispatch<React.SetStateAction<number | null>>;
  setAltura: React.Dispatch<React.SetStateAction<number | null>>;
  setObjetivo: React.Dispatch<React.SetStateAction<string>>;
  setCond: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({
  setSexo,
  setIdade,
  setPeso,
  setAltura,
  setObjetivo,
  setCond
}: Props) {
  function handleSubmit(event: any) {
    event.preventDefault();
    var sexo_: HTMLInputElement = document.getElementById("sexo") as HTMLInputElement;
    var idade_: HTMLInputElement = document.getElementById("idade") as HTMLInputElement;
    var peso_: HTMLInputElement = document.getElementById("peso") as HTMLInputElement;
    var altura_: HTMLInputElement = document.getElementById("altura") as HTMLInputElement;
    var objetivo_: HTMLInputElement = document.getElementById("select") as HTMLInputElement;
    setSexo(sexo_.value);
    setIdade(Number(idade_.value));
    setPeso(Number(peso_.value));
    setAltura(Number(altura_.value));
    setObjetivo(objetivo_.value);
    setCond(true);
  }

  return (
    <div className={styles.boxForm}>
      <h1 className={styles.tituloFormulario}>Informe seus dados</h1>
      <form className={styles.form} onSubmit={(evento) => handleSubmit(evento)}>
        <select required name="sexo" id="sexo" placeholder="Sexo">
          <option value="">Sexo</option>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>

        <input
          required
          type="number"
          min={1}
          max={110}
          id="idade"
          name="idade"
          placeholder="Idade"
        />

        <input
          required
          type="text"
          id="peso"
          name="peso"
          placeholder="Peso"
        />

        <input
          required
          type="number"
          min={100}
          max={250}
          id="altura"
          name="altura"
          placeholder="Altura (em cm)"
        />

        <select required name="select" id="select" placeholder="Objetivo">
          <option value="">Objetivo</option>
          <option>Emagrecer</option>
          <option>Engordar</option>
          <option>Manter Peso</option>
        </select>
        <input className={styles.botao} type="submit" value="Enviar" />
      </form>
    </div>
  );
}
