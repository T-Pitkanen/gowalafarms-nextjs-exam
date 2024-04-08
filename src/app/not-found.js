import Link from 'next/link';

const NotFound = () => {
    
    return <div className={'not-found'}>404 Siden blev ikke fundet.  <span><Link href='/'>Til Forsiden</Link></span></div>

}

export default NotFound;