import { useState } from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const calculo = (peso / (altura * altura)).toFixed(2);

  const Resultado = () => {
    if (calculo >= 0.1) {
      return calculo;
    } else {
      return;
    }
  };

  const description = () => {
    if (calculo < 18.5) {
      return <h2>Cuidado Você está abaixo do peso!</h2>;
    } else if (calculo >= 18.5 && calculo <= 25) {
      return <h2>Você está no peso ideal!</h2>;
    } else if (calculo > 25 && calculo <= 30) {
      return <h2>Cuidado! Você está com sobrepeso!</h2>;
    } else if (calculo > 30 && calculo <= 35) {
      return <h2>Cuidado! Você esta com obesidade moderada!</h2>;
    } else if (calculo > 35 && calculo <= 40) {
      return <h2>Cuidado! Você esta com obesidade severa!</h2>;
    } else if (calculo > 40 && calculo <= 45) {
      return <h2>Cuidado! Você esta com obesidade morbita!</h2>;
    } else {
      return;
    }
  };

  return (
    <>
      <form className={styles.Form}>
        <label className={styles.label} htmlFor="altura">
          Altura
        </label>
        <input
          id="altura"
          className={styles.Forminput}
          type="number"
          placeholder="1.63"
          onChange={({ target }) => setAltura(target.value)}
        />
        <label className={styles.label} htmlFor="peso">
          Peso
        </label>
        <input
          id="peso"
          className={styles.Forminput}
          type="number"
          placeholder="62.3 Kg"
          onChange={({ target }) => setPeso(target.value)}
        />

        <div className={styles.resu}>
          <h1 className={styles.h1}>Seu IMC:</h1>

          <h2 className={styles.h2}>{Resultado()}</h2>

          <h3 className={styles.h3}>{description()}</h3>
        </div>
      </form>
    </>
  );
};

export default Formulario;
