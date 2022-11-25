import React, { useEffect, useState } from 'react';
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
import attenction from "../../../assets/atencao.png";
import obeso from "../../../assets/obeso.png";
import styles from "./Modal.module.scss";
import './modal.css';

interface Props {
 type?:string;
 mode:string
}

function ModalComponent(props:Props) {
  const { type,mode } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);
  useEffect(()=>{
    if(type=='initial'){
      setModal(true)
    }
  },[])
 
  return (
    <div className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
      
      <Form inline onSubmit={(e) => e.preventDefault()}>
        {type!="initial" &&(
        <img  className={styles.button} onClick={toggle} src={info} alt="" /> 
        )}
     
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalBody>

        {type=="initial" && 
        <div className='d-flex align-items-center
        '>
        <img src={attenction} alt="" />
          <p className={styles.attention}>Atenção, nenhuma informação desse site substitui o atendimento de um profissional. </p>
          </div>}

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
        Para saber a quantidade de água exata que você precisa tomar por dia, a primeira coisa a se fazer é analisar o seu peso. O cálculo a ser feito é de 35 ml de água multiplicado pelo peso corporal de cada um. <br />
        Vale destacar que, nesse cálculo, você não leva em conta o consumo de outros líquidos (como sucos, chás, refrigerantes ou café). Ou seja, o indivíduo de 60 kg deve tomar necessariamente 2,1 litros de água por dia, outras bebidas ficam de fora da conta (embora também ajudem a hidratar o corpo). <br />
        Além disso, é importante dizer, se você pratica exercícios físicos, você deve se preocupar ainda mais em tomar água, já que se costuma perder uma boa quantidade de líquidos, ou seja, você pode ter que consumir um pouco mais de água do que nesse cálculo.
        </div>}

        {type=="sleep" && <div>
        Especialistas recomendam em média 8 horas de sono por dia, sem interrupções. Este número pode variar de acordo com a idade de cada indivíduo e as necessidades de desenvolvimento de seu corpo, de acordo com o indicado. <br />
        Adultos necessitam de 7 a 8 horas<br />
        Adolescentes precisam dormir cerca de 8 a 10 horas;<br />
        Crianças necessitam de 9 a 13 horas<br />
        Bebês precisam dormir de 12 a 16 horas
        </div>}

        {type=="basal" && <div>
        Gasto calórico basal
        A taxa metabólica basal, conhecida também como gasto energético basal, é a quantidade de energia que o corpo, em repouso, gasta para manter as suas funções vitais, como respiração, batimentos do coração e manutenção da temperatura corporal. <br />
        Os valores da taxa metabólica basal variam de acordo com a idade, o peso e o sexo, e são usados para calcular a quantidade total de energia que o corpo gasta por dia, sendo uma ferramenta para auxiliar no planejamento alimentar de pessoas que desejam manter o peso, engordar ou emagrecer. <br />
        A fórmula que usamos para chegar ao valor da taxa metabólica basal é a fórmula de Harris-Benedict que é:
        Para o grupo feminino que é  “E* (655 + (9.6 x P) + (1.9 x A) - (4.7 x I))” e para o grupo masculino que é “E* (66+ (13.8x P) + (5.0 x A) - (6.8 x I)), onde P é peso, A é altura em cm (que nós convertemos), I é idade e E é a quantidade de exercício que o usuário faz, onde: <br />
        * Sedentário = 1.2; <br />
        * Leve = 1.375; <br />
        * Moderado = 1.55; <br />
        * Alto = 1.725; <br />
        * Extremo = 1.9.
        </div>}

        {type=="energetic" && <div>
        A dieta montada foi de acordo com o método 33%, ou seja, você deve ingerir 33% de kcal de cada macronutriente (proteina, carboidrato e gordura). <br />
        É importante ressaltar a importância de um nutricionista, porque cada pessoa deve seguir uma dieta específica. O intuito dos dados apresentados é ajudar quem quer começar e não sabe como, mas que futuramente vai buscar um profissional.
        Para ajudar, nós da SaudeUNA recomendamos a <a className='ancora' target="_blank" href="https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf">Tabela Brasileira de Composição de Alimentos</a> e o vídeo do <a className='ancora' target="_blank" href="https://www.youtube.com/watch?v=wJBof_K85YY">Renato Cariani, de como montar sua dieta.</a>
        </div>} 
        </ModalBody>
        <ModalFooter>

          <div>
            { type!="initial" && type!="" &&  (
          <Button color="secondary" onClick={toggle}>
            Fechar
          </Button>
        )}

        { type=="initial" && (
          <Button className={styles.exit} onClick={()=> setModal(false)}>
            Confirmar
          </Button>
        )}
          </div>
        </ModalFooter>
    
      </Modal>
    </div>
  );
}

ModalComponent.propTypes = {
  className: PropTypes.string,
};

export default ModalComponent;