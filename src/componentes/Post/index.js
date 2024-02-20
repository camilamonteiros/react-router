import styles from './Post.module.css';

function Post({post}){
    return(
        <div className={styles.post}>
            <img alt='imagem de capa do post' src={`/assets/posts/${post.id}/capa.png`}/>
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
        </div>
    );
}

export default Post;