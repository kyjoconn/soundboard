import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <>
            <div className={styles.navbarwrapper}>
                <img className={styles.sblogo} src='/SB-logo.png' />
                <div>log in user</div>
            </div>
        </>
    )
}
