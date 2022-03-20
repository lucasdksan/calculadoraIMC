import { useState } from "react";
import Header from "../components/Header";
import GridItem from "../components/GridItem";

import { levels, calculateImc, Level } from "../hooks/useIMC";

import styles from "../styles/pages/Home.module.css";

import leftArrowImage from "../assets/leftarrow.png";

const Home = ()=>{
    const [ height, setHeight ] = useState(0);
    const [ weight, setWeight ] = useState(0);
    const [ toShow, setToShow ] = useState<Level | null>(null);

    function handleCalculate(){
        if(height && weight){
            setToShow(calculateImc(height, weight));
        } else {
            alert("Digite todos os campos.");
        }
    }

    function handleBackButton(){
        setToShow(null);
        setHeight(0);
        setWeight(0);
    }

    return(
        <>
            <Header/>
            <main className={styles.container}>
                <article className={styles.leftSide}>
                    <h1>Calcule o seu IMC.</h1>
                    <p>
                        IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                    </p>
                    <input 
                        type="number"
                        name="altura" 
                        id="HeightNumber" 
                        placeholder="Digite a sua altura. Ex: 1.5 (em Metros)"
                        value={height > 0 ? height : ''}
                        onChange={e=>setHeight(Number(e.target.value))}
                        disabled={ toShow ? true : false }
                    />
                    <input 
                        type="number"
                        name="peso" 
                        id="WeightNumber" 
                        placeholder="Digite a sua peso. Ex: 55.5 (em kg)"
                        value={weight > 0 ? weight : ''}
                        onChange={e=>setWeight(Number(e.target.value))}
                        disabled={ toShow ? true : false }
                    />
                    <button 
                        onClick={handleCalculate} 
                        disabled={ toShow ? true : false }
                    >
                        Calculdar
                    </button>
                </article>
                <aside className={styles.rightSide}>
                    {
                        !toShow && (
                            <section className={styles.grid}>
                                {
                                    levels.map((item, key)=>{
                                        return <GridItem key={key} item={item} />
                                    })
                                }
                            </section>
                        )
                    }
                    {
                        toShow && (
                            <section className={styles.rightBig}>
                                <span className={styles.rightArrow} onClick={handleBackButton}>
                                    <img src={leftArrowImage} alt="Button to redisplay all icons and blocks that describe situations." width={25} /> 
                                </span>
                                <GridItem item={toShow}/>
                            </section>
                        )
                    }
                </aside>
            </main>
        </>
    );
}

export default Home;