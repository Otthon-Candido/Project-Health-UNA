import React, { useState } from "react";
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
  const [idadeMessage, setIdadeMessage] = useState<string | null>(null);
  const [pesoMessage, setPesoMessage] = useState<string | null>(null);
  const [alturaMessage, setAlturaMessage] = useState<string | null>(null);


  function handleSubmit(event: any) {
    event.preventDefault();
    var sexo_: HTMLInputElement = document.getElementById("sexo") as HTMLInputElement;
    var idade_: HTMLInputElement = document.getElementById("idade") as HTMLInputElement;
    var peso_: HTMLInputElement = document.getElementById("peso") as HTMLInputElement;
    var altura_: HTMLInputElement = document.getElementById("altura") as HTMLInputElement;
    var objetivo_: HTMLInputElement = document.getElementById("objetivo") as HTMLInputElement;
    var exercicio_: HTMLInputElement = document.getElementById("exercicio") as HTMLInputElement;
    var idadeCond = true
    var alturaCond = true
    var pesoCond = true
    
    if(Number(idade_.value) > 100){
        idadeCond = false
        setIdadeMessage("Máximo 100 anos")
    }
    if(Number(idade_.value) < 1){
      idadeCond = false;
      setIdadeMessage("Mínimo 1 ano")
    }

    if(Number(peso_.value) > 250){
      pesoCond = false;
      setPesoMessage("Máximo 250 Kilos")
    }

    if(Number(peso_.value) < 10){
      pesoCond = false;
      setPesoMessage("Mínimo 10 Kilos")
    }

    if(Number(altura_.value) > 2.5){
      alturaCond = false;
      setAlturaMessage("Máximo 2.5 metros")
    }

    if(Number(altura_.value) < 0.5){
      alturaCond = false;
      setAlturaMessage("Mínimo 0.5 metros")
    }
    console.log(idadeMessage)
    if(alturaCond && pesoCond && idadeCond){
    setSexo(sexo_.value);
    setIdade(Number(idade_.value));
    setPeso(Number(peso_.value));
    setAltura(Number(altura_.value));
    setObjetivo(objetivo_.value);
    setCond(true);
    setExercicio(exercicio_.value);
    }
  }

  function handleChange(id:string){

    switch(id){

      case 'idade':
    
        var variavel: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
        variavel.value = variavel.value.replace(/[^0-9]/g, '');
        setIdadeMessage(null);
        break;

      case 'altura':
        var variavel: HTMLInputElement = document.getElementById(id) as HTMLInputElement
        variavel.value = variavel.value.replace(/[^0-9.,]/g, '').replace(/,/g,'.').replace(/(\..*?)\..*/g, '$1');
        setAlturaMessage(null);
        break;

      case 'peso':
        var variavel: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
        variavel.value = variavel.value.replace(/[^0-9.,]/g, '').replace(/,/g,'.').replace(/(\..*?)\..*/g, '$1');
        setPesoMessage(null);
        break;
    }

  }

  return (
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
    <div  className={styles.boxForm}>
      <h1 className={styles.tituloFormulario}>Informe seus dados</h1>
      <form className={styles.form} onSubmit={(evento) => handleSubmit(evento)}>
        <div className={styles.inputs}>
        <h3 className={styles.titulo}>Sexo:</h3>
        <select required name="sexo" id="sexo" placeholder="Sexo">
          <option value="">Sexo</option>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
        </div>
        <div className={styles.inputs}>
        <h3 className={styles.titulo}>Idade:</h3>
        <input
        
          required
          type="text"
          id="idade"
          name="idade"
          placeholder="Idade"
          maxLength={3}
          onChange={()=>handleChange('idade')}
        />
        {idadeMessage!=null?(
                 <div className={styles.divAlert}>
          <p className={styles.alert}>
            {idadeMessage}
            </p>
            </div>
        ):null}
        </div>
        <div className={styles.inputs}>
        <h3 className={styles.titulo}>Peso:</h3>
        <input
          required
          type="text"
          id="peso"
          name="peso"
          maxLength={4}
          placeholder="Peso"
          onChange={()=>handleChange('peso')}
        />
            {pesoMessage!=null?(
              <div className={styles.divAlert}>
           <p className={styles.alert}>
            {pesoMessage}
            </p>
            </div>
        ):null}
         </div>

         <div className={styles.inputs}>
        <h3 className={styles.titulo}>Altura:</h3>
        <input
          required
          type="text"
          id="altura"
          maxLength={4}
          name="altura"
          placeholder="Altura (em m)"
          onChange={()=>handleChange('altura')}
        />
        {alturaMessage!=null? (
           <div className={styles.divAlert}>
           <p className={styles.alert}>
            {alturaMessage}
            </p>
            </div>
        ):null}
         </div>
         <div className={styles.inputs}>
        <h3 className={styles.titulo}>Objetivo:</h3>
        <select required name="objetivo" id="objetivo" placeholder="Objetivo">
          <option value="">Objetivo</option>
          <option value="Emagrescer">Emagrecer</option>
          <option value="Engordar">Engordar</option>
          <option value="Manter">Manter Peso</option>
        </select>
        </div>
        <div className={styles.inputs}>
        <h3 className={styles.titulo}>Exercício:</h3>
        <select required name="exercicio" id="exercicio" placeholder="Exercício">
          <option value="">Prática de exercício</option>
          <option value="sedentario">Sedentários (pouco ou nenhum exercício)</option>
          <option value="levemente">Levemente ativo (exercício leve 1 a 3 dias por semana)</option>
          <option value="moderado">Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana)</option>
          <option value="ativo">Altamente ativo (exercício pesado de 5 a 6 dias por semana)</option>
          <option value="extremo">Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)</option>
        </select>
        </div>

        <input className={styles.button} type="submit" value="Enviar" />
      </form>
    </div>
    </div>
  );
}
