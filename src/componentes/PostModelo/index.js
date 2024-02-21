import styles from "./PostModelo.module.css";

function PostModelo({titulo, children, fotoCapa}) {
  return (
    <article className={styles.postModeloContainer}>
        <div
            className={styles.fotoCapa}
            style={{ backgroundImage: `url(${fotoCapa})` }}
        ></div>
        <h2 className={styles.titulo}>
            {titulo}
        </h2>
        <div className={styles.postContainer}>
            {children}
        </div>
    </article>
  );
}

export default PostModelo;
