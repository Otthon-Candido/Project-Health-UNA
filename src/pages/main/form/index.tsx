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
    <div>
      <h1>Informe seus dados</h1>
      <form className={styles.form} onSubmit={(evento) => handleSubmit(evento)}>
        <select required name="sexo" id="sexo" placeholder="Sexo">
          <option value="">Selecione</option>
          <option>MASCULINO</option>
          <option>FEIMININO</option>
        </select>

        <input
          required
          type="number"
          id="idade"
          name="idade"
          placeholder="Idade"
        />

        <input
          required
          type="number"
          id="peso"
          name="peso"
          placeholder="Peso"
        />

        <input
          required
          type="number"
          id="altura"
          name="altura"
          placeholder="Altura"
        />

        <select required name="select" id="select" placeholder="Objetivo">
          <option value="">Selecione</option>
          <option>Emagrecer</option>
          <option>Engordar</option>
          <option>Manter Peso</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
