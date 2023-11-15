import Link from 'next/link'
import styles from './styles.module.css'

export default function Cabecalho() {
    return (
        <div>
            <header className={styles.header}>
                <h1>Site de Notícias</h1>
                <div>
                    <Link href="/"> Home </Link>
                    <Link href="https://github.com/Luccas69"> Contato </Link>
                </div>
            </header>
        </div>


    )
}