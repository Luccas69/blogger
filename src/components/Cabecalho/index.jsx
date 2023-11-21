import Link from 'next/link'
import styles from './styles.module.css'

export default function Cabecalho() {
    return (
        <header className={styles.header}>
            <div>
                <h1>Site de Artigos</h1>
            </div>
            <div>
                <Link href="/">Início</Link>
                <Link href="https://github.com/Luccas69">Contato</Link>
            </div>
        </header>
    )
}