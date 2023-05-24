import Image from 'next/image';
import Link from 'next/link';

import styles from './piccarduser.module.css';

import myPic from '../../../images/pic.png';

export default function PicCardUser() {
    return (
        <div className={styles.pic_card_user}>
            <div className={styles.pic_box}>
                <Image
                    priority
                    className={styles.pic}
                    src={myPic}
                    width={140}
                    height={140}
                    alt="Picture of the author"
                />
            </div>
            <Link className={styles.user} target='_blank' href="https://github.com/vinicioslop/">
                @vinicioslop
            </Link>
        </div>
    )
}