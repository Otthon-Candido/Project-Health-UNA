import React from "react";
import styles from "./Form.module.scss";

interface Props {
  setSexo: React.Dispatch<React.SetStateAction<string>>;
  setIdade: React.Dispatch<React.SetStateAction<number | null>>;
  setPeso: React.Dispatch<React.SetStateAction<number | null>>;
  setAltura: React.Dispatch<React.SetStateAction<number | null>>;
  setObjetivo: React.Dispatch<React.SetStateAction<string>>;
  setCond: React.Dispatch<React.SetStateAction<boolean>>;
  setExercicio: React.Dispatch<React.SetStateAction<string>>;
  mode:string
}

export default function Form({
  setSexo,
  setIdade,
  setPeso,
  setAltura,
  setObjetivo,
  setCond,
  setExercicio,
  mode
}: Props) {
  function handleSubmit(event: any) {
    event.preventDefault();
    var sexo_: HTMLInputElement = document.getElementById("sexo") as HTMLInputElement;
    var idade_: HTMLInputElement = document.getElementById("idade") as HTMLInputElement;
    var peso_: HTMLInputElement = document.getElementById("peso") as HTMLInputElement;
    var altura_: HTMLInputElement = document.getElementById("altura") as HTMLInputElement;
    var objetivo_: HTMLInputElement = document.getElementById("objetivo") as HTMLInputElement;
    var exercicio_: HTMLInputElement = document.getElementById("exercicio") as HTMLInputElement;
    setSexo(sexo_.value);
    setIdade(Number(idade_.value));
    setPeso(Number(peso_.value));
    setAltura(Number(altura_.value));
    setObjetivo(objetivo_.value);
    setCond(true);
    setExercicio(exercicio_.value);
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
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
    <div  className={styles.boxForm}>
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

        <select required name="objetivo" id="objetivo" placeholder="Objetivo">
          <option value="">Objetivo</option>
          <option>Emagrecer</option>
          <option>Engordar</option>
          <option>Manter Peso</option>
        </select>

        <select required name="exercicio" id="exercicio" placeholder="Exercício">
          <option value="">Prática de exercício</option>
          <option value="sedentario">Sedentários (pouco ou nenhum exercício)</option>
          <option value="levemente">Levemente ativo (exercício leve 1 a 3 dias por semana)</option>
          <option value="moderado">Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana)</option>
          <option value="ativo">Altamente ativo (exercício pesado de 5 a 6 dias por semana)</option>
          <option value="extremo">Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)</option>
        </select>

        <input className={styles.botao} type="submit" value="Enviar" />
      </form>
    </div>
    </div>
  );
}
