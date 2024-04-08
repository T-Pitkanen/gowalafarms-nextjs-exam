
import styles from './page.module.css';
import Hero from '@/components/hero/hero';

export default function Page() {

  return (

    <div className={`${styles.container}`}>
      <Hero />
    </div>
  )
}
