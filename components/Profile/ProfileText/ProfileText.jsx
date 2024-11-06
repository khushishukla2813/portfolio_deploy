import React from 'react'
import styles from '../../../styles/Profile.module.css'
import Role from './Role/Role'

function ProfileText() {
    return (
        <div className={styles.profileText}>
            <h1>Hey</h1>
            <h2 style={{marginBlockEnd:"5rem"}} >I’m Khushi, <br/>
                A <Role/> <br/>
            </h2>
            <a href = "https://drive.google.com/file/d/1QEZ5hY8QGM2iZRW66jXk15Xga6d-0zja/view?usp=drive_link" target="_blank" without rel="noreferrer" className={styles.a} >Download CV &nbsp; <i className="fas fa-cloud-download-alt fa-md"></i></a>
        </div>
    )
}

export default ProfileText
