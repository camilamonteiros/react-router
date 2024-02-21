import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';

function NaoEncontrada(){

    return(
        <>
        <div className={styles.paragrafo}>
            <span className={styles.testo404}>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e recarregue a página, ou volte para a página inicial
                </p>
                <p className={styles.paragrafo}>
                    Aguarde...
                </p>
                <div className={styles.botaoContainer}>
                    <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt='404'/>
            </span>
        </div>
        <div className={styles.espacoEmBranco}>
            
        </div>
        </>
    );
}

export default NaoEncontrada;