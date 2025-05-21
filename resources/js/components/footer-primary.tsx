import React from "react";

const Footer: React.FC = () => {
      return (
            <footer id="contact" className="bg-transparent text-black dark:text-gray-300 relative lg:pt-12">
                  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <div className="w-[300px] h-[300px] bg-pink-500 opacity-10 blur-3xl rounded-full"></div>
                  </div>

                  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 items-center justify-center">
                              <div className="pb-8 lg:pe-16 justify-center items-center">
                                    <h1 className="pb-7 text-3xl/relaxed bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent text-center lg:text-start">
                                          Hubungi Saya
                                    </h1>
                                    <p className="text-md"></p>
                                    <div className="flex flex-col gap-5">
                                          {/* Email */}
                                          <div className="inline-flex gap-5 items-center justify-center lg:justify-start">
                                                <a className="transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                                                      <span className="sr-only">Email</span>
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                                      </svg>
                                                </a>
                                                <div className="flex flex-col self-start leading-tight gap-2">
                                                      <p className="text-sm md:text-xl">Email</p>
                                                      <p className="text-xs md:text-md">hijir512@gmail.com</p>
                                                </div>
                                          </div>

                                          {/* Telepon */}
                                          <div className="inline-flex gap-5 items-center justify-center lg:justify-start">
                                                <a className="transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                                                      <span className="sr-only">Telepon</span>
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 28.314 28.323"
                                                            className="size-6"
                                                            fill="currentColor"
                                                            enableBackground="new 0 0 28.314 28.323"
                                                            xmlSpace="preserve"
                                                      >
                                                            <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
                                                      </svg>

                                                </a>
                                                <div className="flex flex-col self-start leading-tight gap-2">
                                                      <p className="text-sm md:text-xl">Telepon</p>
                                                      <p className="text-xs md:text-md">+6285399688623</p>
                                                </div>
                                          </div>

                                          {/* Lokasi */}
                                          <div className="inline-flex gap-5 items-center justify-center lg:justify-start">
                                                <a className="transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                                                      <span className="sr-only">Lokasi</span>
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                      </svg>
                                                </a>
                                                <div className="flex flex-col self-start leading-tight gap-2">
                                                      <p className="text-sm md:text-xl">Lokasi</p>
                                                      <p className="text-xs md:text-md">Makassar, Indonesia</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="py-8 lg:order-last lg:py-16 lg:ps-16">
                                    <div className="mt-8 space-y-4 lg:mt-0 text-center lg:text-start">
                                          <span className="hidden h-1 w-20 rounded-sm bg-linear-to-r from-blue-500 to-purple-500 lg:block"></span>

                                          <div>
                                                <h2 className="text-2xl font-medium text-black dark:text-gray-100">Request a Demo</h2>

                                                <p className="mt-4 lg:max-w-lg text-center lg:text-start">
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum deserunt nesciunt praesentium, repellendus eum perspiciatis ratione pariatur a aperiam eius numquam doloribus asperiores sunt.
                                                </p>
                                          </div>

                                          <form className="mt-6 w-full cursor-pointer">
                                                <label htmlFor="UserEmail" className="sr-only">
                                                      Email
                                                </label>
                                                <div className="rounded-md border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                                                      <input
                                                            type="email"
                                                            id="UserEmail"
                                                            placeholder="john@rhcp.com"
                                                            className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900"
                                                      />
                                                      <button
                                                            type="submit"
                                                            className="mt-1 w-full rounded-sm bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-bold tracking-wide uppercase transition-none  sm:mt-0 sm:w-auto sm:shrink-0"
                                                      >
                                                            Sign Up
                                                      </button>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 flex flex-col-reverse gap-5 sm:items-center sm:justify-between dark:border-gray-800 p-8">
                        <p className="text-center text-sm text-gray-500 sm:text-left dark:text-gray-400">
                              Hijir Ismail &copy; 2024. All rights reserved.
                        </p>

                        <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                              <li>
                                    <a
                                          href="#"
                                          rel="noreferrer"
                                          target="_blank"
                                          className="transition hover:text-gray-700/75"
                                    >
                                          <span className="sr-only">Linkedin</span>
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="size-7"
                                                viewBox="0 0 24 24"
                                          >
                                                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5
                                    5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.5
                                    19H4.5v-9h3v9zM6 8.5c-.966 0-1.75-.784-1.75-1.75S5.034
                                    5 6 5s1.75.784 1.75 1.75S6.966 8.5 6 8.5zM20
                                    19h-3v-4.5c0-1.105-.895-2-2-2s-2
                                    .895-2 2V19h-3v-9h3v1.354C13.364 10.133 14.61
                                    9 16.25 9c2.071 0 3.75 1.679 3.75 3.75V19z" />
                                          </svg>
                                    </a>
                              </li>

                              <li>
                                    <a
                                          href="#"
                                          rel="noreferrer"
                                          target="_blank"
                                          className="transition hover:text-gray-700/75"
                                    >
                                          <span className="sr-only">Instagram</span>
                                          <svg
                                                className="size-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                          >
                                                <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                />
                                          </svg>
                                    </a>
                              </li>

                              <li>
                                    <a
                                          href="#"
                                          rel="noreferrer"
                                          target="_blank"
                                          className="transition hover:text-gray-700/75"
                                    >
                                          <span className="sr-only">Twitter</span>
                                          <svg
                                                className="size-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                          >
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                          </svg>
                                    </a>
                              </li>

                              <li>
                                    <a
                                          href="#"
                                          rel="noreferrer"
                                          target="_blank"
                                          className="transition hover:text-gray-700/75"
                                    >
                                          <span className="sr-only">GitHub</span>
                                          <svg
                                                className="size-7"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                          >
                                                <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.5.336c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
                                                />
                                          </svg>
                                    </a>
                              </li>
                        </ul>
                  </div>
            </footer>
      );
};

export default Footer;
