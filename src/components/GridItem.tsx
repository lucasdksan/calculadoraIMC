import { Level } from "../hooks/useIMC";
import styles from "../styles/components/GridItem.module.css";

import upImage from "../assets/up.png";
import downImage from "../assets/down.png";

type Props = {
    item: Level
};

const GridItem = ({item}:Props)=>{
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <span className={styles.gridIcon}>
                <img src={ item.icon === 'up' ? upImage : downImage } alt="Icon that visually describes the quality of the situation" width={30} />
            </span>
            <h1 className={styles.gridTitle}>
                {item.title}
            </h1>

            {
                item.yourImc && (
                    <span className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m</span>
                )
            }

            <p className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </p>
        </div>
    );
}

export default GridItem;