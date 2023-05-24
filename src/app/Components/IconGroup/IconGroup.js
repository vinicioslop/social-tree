import Image from 'next/image';
import Link from 'next/link';

import styles from './icongroup.module.css';

import linkedinIcon from '../../../icons/linkedin_icon.svg';
import githubIcon from '../../../icons/github_icon.svg';
import instagramIcon from '../../../icons/instagram_icon.svg';

export default function IconGroup() {
    return (
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
    )
}