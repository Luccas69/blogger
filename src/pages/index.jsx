import Cabecalho from "@/components/Cabecalho";
import Card from '@/components/Card ';
import Button from '@/components/Button';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (<>
    <Cabecalho />
    <div className={styles.container}>
      <Card />
      <Button />
    </div >
  </>
  )
}