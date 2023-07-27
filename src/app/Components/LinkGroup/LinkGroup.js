import Link from 'next/link';

import styles from './styles.module.css';

export default function LinkGroup() {
    return (
        <div className={styles.links_box}>
            <Link className={styles.link} target='_blank' href="https://www.linkedin.com/in/viniciuslopeslima/">
                <button className={styles.link_button}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> LinkedIn
                </button>
            </Link>
            <Link className={styles.link} target='_blank' href="https://github.com/vinicioslop">
                <button className={styles.link_button}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> GitHub
                </button>
            </Link>
            <Link className={styles.link} target='_blank' href="https://app.rocketseat.com.br/me/viniciuslopeslima">
                <button className={styles.link_button}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Rocketseat
                </button>
            </Link>
            <Link className={styles.link} target='_blank' href="https://www.instagram.com/viniciusl.21/">
                <button className={styles.link_button}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Instagram
                </button>
            </Link>
        </div>
    )
}