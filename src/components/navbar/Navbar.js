import Link from 'next/link'
import styles from '@styles/navbar.module.css'

export default function Navbar() {
    return (
        

        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link className={styles.links} href="/">REMEDIE</Link>
                <ul className={styles.ul}>
                    <div className={styles.botaoNavbar}>
                        <li className={styles.li}>
                            <Link href="/">Home</Link>
                        </li>
                    </div>

                    <div className={styles.botaoNavbar}>
                        <li className={styles.li}>
                            <Link href="/consultas">Consultas</Link>
                        </li>
                    </div>

                    <div className={styles.botaoNavbar}>
                        <li className={styles.li}>
                            <Link href="/exames">Exames</Link>
                        </li>
                    </div>

                    <div className={styles.botaoNavbar}>
                        <li className={styles.li}>
                            <Link href="/remedios">Remédios</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>

    )
}