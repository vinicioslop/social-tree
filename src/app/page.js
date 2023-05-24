import PicCardUser from './Components/PicCardUser/PicCardUser';
import LinkGroup from './Components/LinkGroup/LinkGroup';
import IconGroup from './Components/IconGroup/IconGroup';
import MyFooter from './Components/MyFooter/MyFooter';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <PicCardUser />
      <LinkGroup />
      <IconGroup />
      <MyFooter />
    </main>
  );
}
