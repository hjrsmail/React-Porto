import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import Preloader from '@/components/preloader';
import Navbar from '@/components/navbar';
import Hero from './partials/hero';
import About from './partials/about';
import Skills from './partials/skills';
import Project from './partials/project';
import Footer from '@/components/footer-primary';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Preloader>
                <div className="font-merriweather min-h-full bg-white text-black dark:bg-gradient-to-r from-gray-900 to-darkk dark:text-gray-300">
                    <Navbar />
                    <div className="mx-auto w-screen max-w-screen-xl">
                        <Hero />
                        <About />
                        <Skills />
                        <Project />
                    </div>
                    <Footer />
                </div>
            </Preloader>
        </>
    );
}
