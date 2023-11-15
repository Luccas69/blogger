import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

export default function Card() {

    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/artigos')
            .then(response => {
                console.log(response.data);
                setArtigos(response.data.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className={styles.card}>
            {artigos.map(artigo => (
                <h1>{artigo.attributes.Titulo}</h1>
            ))}
        </div>
    )
}