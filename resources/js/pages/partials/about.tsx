const about = () => {
    return (
        <section id="about" className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-1 lg:px-2 lg:pb-16">
            {/* Title */}
            <div className="flex flex-col items-center justify-center py-6 text-center">
                <p className="text-shadow-lg bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-6xl">
                    About Me
                </p>
                <p className="text-md pt-1 font-light text-black md:text-lg dark:text-gray-400">Get to know me better</p>
            </div>

            {/* Content */}
            <div className="my-2 w-full text-black md:my-6 dark:text-gray-300">
                <div className="md:grid md:grid-cols-1 lg:grid-cols-3">
                    {/* Image Section */}
                    <div className="relative mx-auto w-fit overflow-visible">
                        <img
                            src="/img/myPictures.jpg"
                            alt="My Photo"
                            className="relative z-10 h-60 w-45 rounded-lg brightness-80 duration-300 hover:brightness-100 md:h-100 md:w-80"
                        />
                    </div>

                    {/* Description Section */}
                    <div className="description my-4 flex rounded-r-4xl md:col-span-2">
                        <div className="mx-auto w-auto max-w-7xl cursor-pointer gap-6 text-justify brightness-80">
                            <div className="text-description flex flex-col gap-6">
                                <div className="t-top duration-200 dark:hover:text-white">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium omnis ducimus maxime sunt, ipsam quisquam
                                    sequi odio alias officiis et obcaecati explicabo quas sint reprehenderit quam unde dolorum reiciendis expedita
                                    deleniti, ex provident similique. Libero tempore dignissimos quas, vel sed provident atque, accusamus assumenda id
                                    minus soluta accusantium quos. Perferendis.
                                </div>
                                <div className="t-bot duration-100 dark:hover:text-white">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium omnis ducimus maxime sunt, ipsam quisquam
                                    sequi odio alias officiis et obcaecati explicabo quas sint reprehenderit quam unde dolorum reiciendis expedita
                                    deleniti, ex provident similique. Libero tempore dignissimos quas, vel sed provident atque, accusamus assumenda id
                                    minus soluta accusantium quos. Perferendis.
                                </div>
                            </div>

                            {/* Blur background */}
                            <div className="absolute top-20 right-5 z-0 h-60 w-60 rounded-full opacity-20 blur-xl bg-pink-600 dark:bg-purple-600" />

                            {/* Cards */}
                            <div className="animated fadeIn mx-auto w-full max-w-7xl items-center md:mt-2 lg:inline-flex">
                                <div className="mx-auto grid w-auto grid-cols-3 items-center justify-center gap-3 p-3 md:p-6">
                                    {[
                                        { title: '1+', desc: 'Years of Experience' },
                                        { title: '3', desc: 'Project Created' },
                                        { title: '5+', desc: 'Certificate' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-gray-800 p-2 md:p-6"
                                        >
                                            <div className="text-sm sm:text-2xl md:mb-1">{item.title}</div>
                                            <p className="text-center text-xs sm:text-lg">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Education & Experience */}
                            <div className="animated fadeIn mx-auto w-full max-w-7xl items-center lg:inline-flex">
                                <div className="max-w mx-auto grid w-full grid-cols-2 items-center justify-center gap-3 p-3 md:p-6">
                                    {/* Education */}
                                    <div className="h-full w-full rounded-2xl border border-gray-800 p-4 md:p-6">
                                        <div className="mb-2 flex items-center gap-1 md:gap-4">
                                            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2 text-blue-500 md:bg-gray-900">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="size-4 md:size-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                                    />
                                                </svg>
                                            </span>
                                            <h5 className="custom-mini:text-xs text-md font-semibold md:text-xl">Education</h5>
                                        </div>
                                        <ul className="relative space-y-6 border-l border-gray-300 text-start">
                                            <li className="relative">
                                                <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
                                                <div className="ml-3 custom-mini:text-xs text-sm font-black sm:text-lg">Bachelor of Informatic Engineering Education</div>
                                                <p className="ml-3 custom-mini:text-xs text-sm">2021 - 2025</p>
                                                <p className="ml-3 custom-mini:text-xs text-sm">Universitas Negeri Makassar</p>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Experience */}
                                    <div className="h-full w-full rounded-2xl border border-gray-800 p-4 md:p-6">
                                        <div className="mb-2 flex items-center gap-1 md:gap-4">
                                            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2 text-blue-500 md:bg-gray-900">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="size-4 md:size-6"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M3 16.5v1.125C3 19.216 4.284 20.5 5.875 20.5h12.25c1.591 0 2.875-1.284 2.875-2.875V16.5m-9-12v12m0 0l-3.75-3.75M12 16.5l3.75-3.75"
                                                    />
                                                </svg>
                                            </span>
                                            <h5 className="custom-mini:text-xs text-md font-semibold md:text-xl">Experience</h5>
                                        </div>
                                        <ul className="relative space-y-6 border-l border-gray-300 text-start">
                                            <li className="relative">
                                                <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
                                                <div className="ml-3 text-sm custom-mini:text-xs font-black sm:text-lg">Freelance Programmer</div>
                                                <p className="ml-3 text-sm custom-mini:text-xs">2024 - present</p>
                                                <p className="ml-3 text-sm custom-mini:text-xs">Remote Projects</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Download CV */}
                            <div className="flex flex-row justify-center gap-4 p-4 lg:justify-start">
                                <div className="cv-downloader">
                                    <a
                                        href="/pdf/cv-new.pdf"
                                        download
                                        className="inline-flex max-w-44 items-center gap-1 rounded-md border border-gray-900 bg-pink-300 px-3 py-2 duration-400 hover:bg-gray-800 hover:text-gray-400 dark:bg-blue-500"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="size-4 md:size-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 16.5v1.125C3 19.216 4.284 20.5 5.875 20.5h12.25c1.591 0 2.875-1.284 2.875-2.875V16.5m-9-12v12m0 0l-3.75-3.75M12 16.5l3.75-3.75"
                                            />
                                        </svg>
                                        <p className="md:text-md text-sm">Download CV</p>
                                    </a>
                                </div>
                                <div className="project-link">
                                    <a
                                        href="{{ url('portofolio') }}"
                                        className="inline-flex max-w-44 items-center gap-1 rounded-md border-1 border-gray-900 px-3 py-2 text-blue-500 duration-400 hover:bg-gray-800 hover:text-gray-400"
                                    >
                                        {/* Ikon Download SVG  */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="size-4 md:size-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                            />
                                        </svg>
                                        <p className="md:text-md text-sm">See Portfolio</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default about;
