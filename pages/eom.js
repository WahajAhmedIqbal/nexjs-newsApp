import Toolbar from '../components/toolbar'

import styles from '../styles/eom.module.css'

const EOM = ({ employee }) => {
    console.log("🚀 ~ file: eom.js ~ line 2 ~ EOM ~ employee", employee)
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>
                    Employee of the month
               </h1>
                <div className={styles.employeeOftheMonth}>

                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    )

    const employee = await res.json()

    return {
        props: {
            employee
        }
    }
}

export default EOM;