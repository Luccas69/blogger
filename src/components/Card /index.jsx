import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Card() {

    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1337/api/artigos')
            .then(response => console.log(response.data.data))
            .catch(error => console.log(error));
        }, []);


    return (
        <div>

        </div>

    )
}
