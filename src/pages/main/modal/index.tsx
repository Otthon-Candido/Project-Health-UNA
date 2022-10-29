import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from 'reactstrap';
import PropTypes from 'prop-types';
import magro from "../../../assets/magro.png";
import normal from "../../../assets/normal.png";
import info from "../../../assets/informacao.png";
import obeso from "../../../assets/obeso.png";
import styles from "./Modal.module.scss";
import './modal.css';

interface Props {
 type:string,
 mode:string
}

function Example(props:Props) {
  const { type,mode } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <img className={styles.button} onClick={toggle} src={info} alt="" /> 
     
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalBody>
        {type=="imc" && <div>
        O IMC é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura. Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários profissionais de saúde, incluindo médicos, enfermeiros e nutricionistas, para saber, de uma forma rápida, se a pessoa precisa ganhar ou perder peso.
        Embora seja uma ferramenta muito comum, o IMC não é considerada a forma mais exata de avaliar o peso, já que não leva em consideração a composição corporal.
        <div className='d-flex align-items-center mt-2'> 
          <img src={magro} alt="magro" /> 
          <p> IMC &lt; 18.5 - Baixo Peso </p>
        </div>
        <div className='d-flex align-items-center mt-4'> 
          <img src={normal} alt="normal" /> 
          <p>  18.5  &lt; IMC &lt; 24.9 - Peso Normal </p>
        </div>
        <div className='d-flex align-items-start mt-4'> 
          <img src={obeso} alt="obeso" /> 
          <div>   
          <p> 25.0 &lt; IMC &lt; 29.9 - Pré-obesidade </p>
          <p> 30.0 &lt; IMC &lt; 34.9 - Obesidade Grau I </p>
          <p> 35.0 &lt; IMC &lt; 39.9 - Obesidade Grau II </p>
          <p> IMC &gt; 40.0 - Obesidade Grau III </p>
          </div> 
        </div>
       
  
        </div>}

        {type=="water" && <div>
        Para saber a quantidade de água exata que você precisa tomar por dia, a primeira coisa a se fazer é analisar o seu peso. O cálculo a ser feito é de 35 ml de água multiplicado pelo peso corporal de cada um. 
        Vale destacar que, nesse cálculo, você não leva em conta o consumo de outros líquidos (como sucos, chás, refrigerantes ou café). Ou seja, o indivíduo de 60 kg deve tomar necessariamente 2,1 litros de água por dia, outras bebidas ficam de fora da conta (embora também ajudem a hidratar o corpo).
        Além disso, é importante dizer, se você pratica exercícios físicos, você deve se preocupar ainda mais em tomar água, já que se costuma perder uma boa quantidade de líquidos, ou seja, você pode ter que consumir um pouco mais de água do que nesse cálculo.
        </div>}

        {type=="sleep" && <div>
        Qualidade de sono ideal
        Especialistas recomendam em média 8 horas de sono por dia, sem interrupções. Este número pode variar de acordo com a idade de cada indivíduo e as necessidades de desenvolvimento de seu corpo, de acordo com o indicado.
        Adultos necessitam de 7 a 8 horas de sono de qualidade e em horários regulares por dia;
        Adolescentes precisam dormir cerca de 8 a 10 horas diariamente; 
        Crianças necessitam de 9 a 13 horas de sono a cada dia;
        Bebês precisam dormir de 12 a 16 horas por dia.
        </div>}

        {type=="basal" && <div>
        Gasto calórico basal
        A taxa metabólica basal, conhecida também como gasto energético basal, é a quantidade de energia que o corpo, em repouso, gasta para manter as suas funções vitais, como respiração, batimentos do coração e manutenção da temperatura corporal.
        Os valores da taxa metabólica basal variam de acordo com a idade, o peso e o sexo, e são usados para calcular a quantidade total de energia que o corpo gasta por dia, sendo uma ferramenta para auxiliar no planejamento alimentar de pessoas que desejam manter o peso, engordar ou emagrecer. 
        A fórmula que usamos para chegar ao valor da taxa metabólica basal é a fórmula de Harris-Benedict que é: 
        Para o grupo feminino que é  “E* (655 + (9.6 x P) + (1.9 x A) - (4.7 x I))” e para o grupo masculino que é “E* (66+ (13.8x P) + (5.0 x A) - (6.8 x I)), onde P é peso, A é altura em cm (que nós convertemos), I é idade e E é a quantidade de exercício que o usuário faz, onde:
        Sedentário = 1.2;
        Leve = 1.375;
        Moderado = 1.55;
        Alto = 1.725;
        Extremo = 1.9.
        </div>}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
    
      </Modal>
    </div>
  );
}

Example.propTypes = {
  className: PropTypes.string,
};

export default Example;