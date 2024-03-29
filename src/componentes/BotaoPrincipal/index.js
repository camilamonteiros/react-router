import { useNavigate } from 'react-router-dom';
import styles from './BotaoPrincipal.module.css';

function BotaoPrincipal({children, tamanho}){
    const navegar = useNavigate()
    return(
        <button
        className={`${styles.botaoPrincipal} ${styles[tamanho]}`}
        onClick={() => navegar(-1)}
        >
            {children}
        </button>
    );
}

export default BotaoPrincipal;