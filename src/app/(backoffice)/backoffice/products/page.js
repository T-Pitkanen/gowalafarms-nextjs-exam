import styles from './page.module.css';
import Reviews from '@/components/backoffice/faq/faq';

export default function ProductsPage() {

    return (
        <div className={styles.page}>

            <h1>Edit Reviews</h1>
            
            <Reviews />


        </div>
    )
    
}