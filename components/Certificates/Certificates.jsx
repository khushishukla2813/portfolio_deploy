import React from 'react';
import styles from '../../styles/Certificate.module.css';
import { CertificateList } from '../../data/Certificate';
import Icon from './Icon/Icon';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Certificate() {
    return (
        <div className={styles.certificates} name="certificate" id="certificate">
            <h1>Certificates</h1>
            <p>These are the certifications I have earned.</p>
            <div className={styles.certificates_section}>
                <VerticalTimeline>
                    {CertificateList.map((cert, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: cert.color, color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0)' }}
                            date={cert.date}
                            iconStyle={{ background: 'rgba(255,255,255)', color: '#fff' }}
                            icon={<Icon url={cert.logo} className={styles.rounded} />}
                        >
                            <h3 className="vertical-timeline-element-title">{cert.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{cert.issuer}</h4>
                            <p>{cert.activities}</p>
                            <div className={styles.certificate_button_section}>
                                <a href={cert.certificate} target="_blank" rel="noopener noreferrer">
                                    View Certificate
                                </a>
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Certificate;
