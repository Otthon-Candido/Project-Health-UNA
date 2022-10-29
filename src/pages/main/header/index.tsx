import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";
import styles from "./Header.module.scss";

interface Props {
  setMode: React.Dispatch<React.SetStateAction<string>>;
  mode:string
}


function BrandExample({setMode,mode}:Props) {

  function changeMode(mode:any){
    setMode(mode);
    }
    
  return (
    <>
     <div  className={`${mode === 'dark'? styles["dark"]:styles["light"]}`}>
      <Navbar className={styles.navbar}>
        <Container>
          <Navbar.Brand>
            <div className='d-flex'>
    
              <button  onClick={()=>changeMode('dark')} className={styles.iconeMoon}>
              <img
              alt=""
              src={moon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
              </button>
            
   
              <button  onClick={()=>changeMode('light')}  className={styles.iconeSun}>
               <img
              alt=""
              src={sun}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
              </button>
              Health
                 </div>
     
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default BrandExample;