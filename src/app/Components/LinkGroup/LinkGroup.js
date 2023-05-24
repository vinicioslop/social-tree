import Link from 'next/link';

import styles from './linkgroup.module.css';

export default function LinkGroup() {
    return (
        <div className={styles.links_box}>
            <Link className={styles.link} target='_blank' href="https://www.linkedin.com/in/viniciuslopeslima/">LinkedIn</Link>
            <Link className={styles.link} target='_blank' href="https://github.com/vinicioslop">GitHub</Link>
            <Link className={styles.link} target='_blank' href="https://app.rocketseat.com.br/me/viniciuslopeslima">Rocketseat</Link>
            <Link className={styles.link} target='_blank' href="https://www.instagram.com/viniciusl.21/">Instagram</Link>
        </div>
    )
}