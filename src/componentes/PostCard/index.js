import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

function PostCard({post}){
    return(
        <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
            <img alt='imagem de capa do post' src={`/assets/posts/${post.id}/capa.png`}/>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <BotaoPrincipal>Ler</BotaoPrincipal>
        </div>
        </Link>
    );
}

export default PostCard;