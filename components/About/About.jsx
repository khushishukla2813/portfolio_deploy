import styles from '../../styles/About.module.css'
import Image from 'next/image'
import Animation from "./Animation"

function About() {
    return (
        <div id="about" className={styles.about}>
            <h1>About Me</h1>
            <div className={styles.about_section}>
                <p>
                    I am a passionate Full Stack Developer who loves to explore new technologies and build scalable applications.Although I expertize in full-stack development, I prefer to work on the backend of any application.
                    <br />
                    <br />I am also highly into Open Source and like to contribute to different projects.More information about my Open Source profile is available at <a href="http://github.com/khushishukla2813" target="_blank" without rel="noreferrer"> GitHub | Khushi Shukla</a>.
                    <br />
                    <br />Apart from coding, I love to write technical blogs on the latest and emerging technologies.All of my blogs are available on <a href="https://medium.com/@khushi28132004" target="_blank" without rel="noreferrer">Medium | Khushi Shukla</a>, where I post articles frequently.
                    <br />
                    <br />I like to work on my problem solving skills by participating in contests and solving questions based on Data Structures and Algorithms. These problem-solving skills help me to optimize the applications that I develop. My Hackerrank profile <a href="https://www.hackerrank.com/profile/khushi28132004" target="_blank" without rel="noreferrer">Hackerrank | Khushi Shukla</a> shows my problem-solving ability.
                </p>
                {/* <Animation></Animation> */}
            </div>
        </div>
    )
}

export default About
