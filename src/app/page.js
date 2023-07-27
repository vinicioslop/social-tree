import Card from '@/app/Components/Card/Card';
import MyFooter from '@/app/Components/MyFooter/MyFooter';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Card />
      <MyFooter />
    </main>
  );
}
