
import styles from './page.module.css';
import Sponsors from '@/components/backoffice/sponsors/sponsors';

export default function PartnersPage() {

    return (
        <div className={styles.page}>

            <h1>Edit Affiliates</h1>

            <Sponsors />
        </div>
    )
    
}