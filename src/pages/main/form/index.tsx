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

  function handleChange(id:string){

    switch(id){

      case 'idade':
        var variavel: HTMLInputElement = document.getElementById(id) as HTMLInputElement
        variavel.value = variavel.value.replace(/[^0-9]/g, '')
        console.log( variavel.value)
        break

      case 'altura':
        var variavel: HTMLInputElement = document.getElementById(id) as HTMLInputElement
        variavel.value = variavel.value.replace(/[^0-9.,]/g, '').replace(/,/g,'.').replace(/(\..*?)\..*/g, '$1');
        console.log( variavel.value)
        break

      case 'peso':
        var variavel: HTMLInputElement = document.getElementById(id) as HTMLInputElement
        variavel.value = variavel.value.replace(/[^0-9.,]/g, '').replace(/,/g,'.').replace(/(\..*?)\..*/g, '$1');
        console.log( variavel.value)
        break
    }

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
          type="text"
          id="idade"
          name="idade"
          placeholder="Idade"
          onChange={()=>handleChange('idade')}
        />

        <input
          required
          type="text"
          id="peso"
          name="peso"
          placeholder="Peso"
          onChange={()=>handleChange('peso')}
        />

        <input
          required
          type="text"
          id="altura"
          name="altura"
          placeholder="Altura (em m)"
          onChange={()=>handleChange('altura')}
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
