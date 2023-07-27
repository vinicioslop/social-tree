import PicCardUser from '@/app/Components/PicCardUser/PicCardUser';
import LinkGroup from '@/app/Components/LinkGroup/LinkGroup';
import IconGroup from '@/app/Components/IconGroup/IconGroup';

import styles from './styles.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <PicCardUser />
      <LinkGroup />
      <IconGroup />
    </div>
  );
}
