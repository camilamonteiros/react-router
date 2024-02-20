import styles from './Banner.module.css';
//import circuloColorido from 'assets/profile.png';
import minhaFoto from 'assets/foto.png'

function Banner(){
    return(
        <div className={styles.banner} >
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Camila Monteiro</h1>
                <p className={styles.paragrafo}>
                    Já imaginou como seria ter experiências digitais incríveis e adaptadas às suas necessidades?
                </p>
            </div>
            <div className={styles.imagem}>
                {/* <img aria-hidden={true} className={styles.circuloColorido} src={circuloColorido} alt='logo' /> */}
                <img aria-hidden={true} className={styles.minhaFoto} src={minhaFoto} alt='logo' />
            </div>
        </div>
    );
}

export default Banner;