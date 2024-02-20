
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

function Menu(){
    return(
        <header className={styles.navegacao}>
            <nav>
                <MenuLink to='/' >Início</MenuLink>
                <MenuLink to='/sobremim' >Sobre Mim</MenuLink>
            </nav>
        </header>
    );
}

export default Menu;