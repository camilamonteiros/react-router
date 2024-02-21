import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa2.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'assets/foto.png'

function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo} >
                Olá, me chamo Camila
            </h3>
            <img
                src={fotoSobreMim}
                alt='Foto'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Sou Designer e desenvolvedora Web Fullstack. Tive uma jornada educacional única que contribuiu diretamente para o meu trabalho. Sou Arquiteta e Urbanista pela Universidade Federal do Piauí, formada em Design pelo IADE - Universidade Européia em Lisboa, Portugal e possuo diversos cursos e formações em Desenvolvimento Web Fullstack. Essas três áreas complementares me equiparam com um olhar para estética e compreensão  de como a funcionalidade pode elevar a experiência do usuário.
            </p>
            <p className={styles.paragrafo}>
                Acredito que uma experiência digital bem projetada pode ser uma ferramenta poderosa para expandir a presença online e alcançar objetivos comerciais. É por isso que estou sempre pronta para compreender necessidades e transformar ideias em realidade digital.
            </p>
            <p className={styles.paragrafo}>
                Nada me traz mais satisfação do que ver um cliente se apaixonar por um projeto que criamos juntos. Acredito que a colaboração é a chave para o sucesso, e me comprometo em fornecer soluções sob medida que superem expectativas.
            </p>
        </PostModelo>
    );
}

export default SobreMim;