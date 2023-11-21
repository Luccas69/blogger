import styles from './styles.module.css';

export default function Card({ id, Titulo, conteudo}) {
    return (
        <div className={styles.card}>
            <h1>{Titulo}</h1>
            <p>{conteudo}</p>
        </div>
    );
}