import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Card() {

    return (
        <div className={styles.container}>
            <img className={styles.imagem} src="xbox.webp" height={400} width={400} alt="foto do xbox series s" />
            <div className={styles.card}>
                <h1>Card</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptatibus blanditiis quasi id rem dolores ipsa architecto perspiciatis aliquam ratione enim sequi ex, tempore tenetur laboriosam corporis quaerat accusantium animi!</p>
            </div>
        </div>
    )
}
