function Card({ key, role, company, from, to, color, logo, activities, certificate }) {
    return (
        <div className={styles.experienceCard}>
            <div className={styles.cover_section} style={{ background: color }}>
                <h3>{company}</h3>
                <div className={styles.company_logo} style={{ backgroundImage: `url(${logo})` }}></div>
            </div>
            <div className={styles.information_section}>
                <h2 className={styles.role}>{role}</h2>
                <p className={styles.duration}><i className="far fa-calendar fa-md"></i> {from} - {to}</p>
                <p className={styles.activities}>{activities}</p>
                <div className={styles.button_section}>
                    {certificate ? (
                        <a href={certificate} target="_blank" rel="noopener noreferrer" title="View Certificate">
                            View Certificate
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Card;
