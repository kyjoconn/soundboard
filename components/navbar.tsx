import styles from '../styles/Home.module.css'

export default function NavBar() {
    return (
        <>
            <div className={styles.navbarwrapper}>
                <img className={styles.sblogo} src='/SB-logo.png' />

                <div className={styles.searchcontainer}>
                    
                        <input className={styles.searchbar} type="text" placeholder="Search" name="search" />
                        <button className={styles.searchbutton} type="submit" />

                </div>

                {/* if !session-user */}
                <img className={styles.usericon} src='/default-user.svg' />
                {/*          */}


            </div>
        </>
    )
}
