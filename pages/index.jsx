import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Profile from '../components/Profile/Profile';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Certificate from '../components/Certificates/Certificates';
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import Patreon from '../components/Patreon/Patreon';
import Loader from '../components/Loader/Loader';
import Script from 'next/script';
import MetaImg from '../public/favicon.jpeg';
import Particles from 'react-tsparticles';
const particleOptions = require('../utils/particles.json');

export async function getStaticProps(context) {
    let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@khushi28132004`);
    response = await response.json();
    let blogs = response.items.slice(0, 3);

    return {
        props: { blogs }, // will be passed to the page component as props
    };
}

export default function Home({ blogs }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (!loading ? <>
        <Head>
            <title>Khushi Shukla</title>
            <meta name="description" content="Hey, a Full Stack Developer here" />
            <meta name="title" property="og:title" content="Khushi Shukla" />
            <meta property="keywords" content="Khushi Shukla Portfolio Web Development" />
            <meta name="image" property="og:image" content={MetaImg} />

            {/* <link rel="icon" href="/public/favicon.jpeg" type="image/jpeg" /> */}
        </Head>
        <Particles id="tsparticles" options={particleOptions} />
        <Patreon />
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificate />
        <Blogs blogs={blogs} />
        <Contact />
        <Script src="https://kit.fontawesome.com/2c32a0aecc.js" crossOrigin="anonymous"></Script>
    </> : <Loader />);
}
