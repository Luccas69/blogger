import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import Card from '@/components/Card';

export default function ListCard() {
    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/artigos')
            .then(response => {
                console.log(response.data);
                setArtigos(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.ListCard}>
            {artigos.map(artigo => (
                <Card
                    key={artigo.id}
                    id={artigo.id}
                    Titulo={artigo.attributes.Titulo}
                    conteudo={artigo.conteudo}
                />
            ))}
        </div>
    );
}
