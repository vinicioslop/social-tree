import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';

import myPic from '../images/pic.png';
import linkedinIcon from '../icons/linkedin_icon.svg';
import githubIcon from '../icons/github_icon.svg';
import instagramIcon from '../icons/instagram_icon.svg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pic_card_user}>
        <div className={styles.pic_box}>
          <Image
            className={styles.pic}
            src={myPic}
            width={140}
            height={140}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.user}>
          @vinicioslop
        </div>
      </div>
      <div className={styles.links_box}>
        <Link className={styles.link} target='_blank' href="https://www.linkedin.com/in/viniciuslopeslima/">LinkedIn</Link>
        <Link className={styles.link} target='_blank' href="https://github.com/vinicioslop">GitHub</Link>
        <Link className={styles.link} target='_blank' href="https://app.rocketseat.com.br/me/viniciuslopeslima">Rocketseat</Link>
        <Link className={styles.link} target='_blank' href="https://www.instagram.com/viniciusl.21/">Instagram</Link>
      </div>
      <div className={styles.icons_box}>
        <Link target='_blank' href="https://www.linkedin.com/in/viniciuslopeslima/">
          <Image
            src={linkedinIcon}
            width={24}
            height={24}
            alt="Icone ..."
          />
        </Link>
        <Link target='_blank' href="https://github.com/vinicioslop">
          <Image
            src={githubIcon}
            width={24}
            height={24}
            alt="Icone ..."
          />
        </Link>
        <Link target='_blank' href="https://www.instagram.com/viniciusl.21/">
          <Image
            src={instagramIcon}
            width={24}
            height={24}
            alt="Icone ..."
          />
        </Link>
      </div>
    </main>
  );
}
