import  { useRouter } from 'next/router'

import styles from '../styles/toolbar.module.css'

const Toolbar = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/eom')}>EOM</div>
            <div onClick={() => window.location.href = 'https://www.linkedin.com/in/wahaj-ahmed-iqbal-4ba3b4170/'}>LinkedIn</div>

        </div>    
    );
}

export default Toolbar;