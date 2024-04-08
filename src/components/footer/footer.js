import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin  } from 'react-icons/fa';

const Footer = () => {

    return <div className={styles.footer}>
         
         <div>   

            <div className={styles.social}>
                
                <Link href="/#"><FaFacebook className={styles.icon} /></Link>
                <Link href="/#"><FaInstagram className={styles.icon} /></Link>
                <Link href="/#"><FaLinkedin className={styles.icon} /></Link>
                <Link href="/#"><FaTwitter className={styles.icon} /></Link>
                <Link href="/#"><FaYoutube className={styles.icon} /></Link>

            </div>     

            <div className={styles.copyright}>

                <p>© 2024. Foodera/MediaCollege Viborg. All rights reserved.</p>
               

            </div>
            
        </div>


    </div>
}

export default Footer;