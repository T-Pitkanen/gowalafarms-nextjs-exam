import styles from './layout.module.css';

export const metadata = {
    title: 'Gowala Farms - BACKOFFICE',
    description: 'Backoffice for gowalafarms.dk',
}
  
export default function backofficeLayout({ children }) {
    return <div className={styles.layout}>
        {children}
    </div>
}