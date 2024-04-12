import styles from './Header.module.scss'
import { rubik,poppins } from "@/app/util/fonts";

type HeaderProps = {

}
type HeaderLinkProps = {
    text: string
    active: boolean
}

export default function Header() {
    return (
        <header className={styles.header}>
            <a className={`${rubik.className} ${styles.name}`}>
                Shawn Hardern
            </a>
            <div>
                <HeaderLink active={true} text={'About'}/>
                <HeaderLink active={false} text={'Contact'}/>
            </div>
        </header>
    )
}

function HeaderLink({text = 'Link', ...props} : HeaderLinkProps) {

    const activeClass = props.active ? styles.linkActive : '';

    return (
        <a className={`${poppins.className} ${styles.link} ${activeClass}`}>{text}</a>
    )
}