import React from 'react';

const projects = Array(5).fill(null);

export default function Portfolio() {
      return (
            <div
                  id="portofolio"
                  className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:px-2 lg:min-h-[750px]"
            >
                  <div className="flex flex-col justify-center items-center text-center py-6">
                        <p className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                              Project Experience
                        </p>
                        <p className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400">
                              Explore My Past Project Experience
                        </p>
                  </div>

                  <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-8 max-w-7xl text-black dark:text-gray-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                              {projects.map((_, i) => (
                                    <div key={i} className="flex flex-col space-y-3 z-10">
                                          <a href="#_" className="block transition-all duration-300 ease-in-out hover:scale-105">
                                                <img
                                                      className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 brightness-70 hover:brightness-100"
                                                      src="/img/image.png"
                                                      alt={`Project ${i + 1}`}
                                                />
                                          </a>
                                          <h2 className="text-lg font-bold sm:text-xl md:text-2xl bg-gradient-to-t from-pink-400 to-purple-500 rounded-md px-3 py-1.5">
                                                <a href="#_">Project Title</a>
                                          </h2>
                                          <p className="text-sm">
                                                {/* Replace this with your project description, trimmed */}
                                                {`Project Description`.length > 25
                                                      ? `Project Description`.slice(0, 25) + '...'
                                                      : `Project Description`}
                                          </p>
                                          <p className="pt-2 text-xs font-medium inline-flex gap-2 items-center">
                                                <a href="#_" className="mr-1 underline">
                                                      Mary Jane
                                                </a>{' '}
                                                · <span className="mx-1">April 17, 2021</span> · <span className="mx-1">3 min. read</span> ·
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="w-6 h-6 mr-1"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor"
                                                >
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
                                                </svg>
                                                <span className="mr-1"> · </span>
                                                <a href="#">
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-5 -mt-2"
                                                            viewBox="0 0 256 256"
                                                            fill="#FFFFFF"
                                                      >
                                                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                                                  <g transform="scale(4,4)">
                                                                        <path d="M31,2c-15.98828,0 -29,13.01172 -29,29c0,12.64844 8.14453,23.42578 19.45703,27.37891c0.16016,0.11328 0.35156,0.18359 0.55469,0.1875c2.82813,0.92578 5.85156,1.43359 8.98828,1.43359c15.98828,0 29,-13.01172 29,-29c0,-15.98828 -13.01172,-29 -29,-29zM31,4c14.88672,0 27,12.11328 27,27c0,11.66016 -7.42969,21.61328 -17.80078,25.38672c-0.10937,-0.32422 -0.19922,-0.80469 -0.19922,-1.13281v-5.25391c0,-2.09375 -1.02344,-4.375 -2.03125,-5.90625c5.55078,-0.9375 11.89453,-3.81641 11.89453,-14.5625c0,-2.94531 -0.92187,-5.54297 -2.73828,-7.73047c0.39844,-1.3125 0.89063,-4.08203 -0.48437,-7.55859c-0.10937,-0.27734 -0.33984,-0.49219 -0.625,-0.58594c-0.28125,-0.08594 -2.84766,-0.75391 -8.17578,2.74219c-2.16797,-0.55859 -4.46094,-0.84766 -6.83984,-0.85547c-2.36719,0.00781 -4.66406,0.29688 -6.82422,0.85547c-5.32812,-3.5 -7.90234,-2.83203 -8.17969,-2.74219c-0.28516,0.09375 -0.51562,0.30859 -0.625,0.58594c-1.37891,3.48047 -0.88672,6.24609 -0.48047,7.55859c-1.82422,2.1875 -2.74609,4.78516 -2.74609,7.73047c0,10.64844 6.23047,13.58203 11.73438,14.55859c-0.69141,0.875 -1.41797,2.00781 -1.73828,3.16016c-1.42187,0.39453 -4.33594,0.40625 -6.29297,-2.94531c-0.07031,-0.12891 -1.78125,-3.16797 -5.15625,-3.40234c-0.53516,0.00391 -1.89453,0.08984 -2.22266,1.12891c-0.36328,1.15234 0.91016,2.02734 1.45703,2.39844c0.03516,0.02344 0.08984,0.05469 0.125,0.07422c0.0625,0.03125 1.51953,0.79688 2.60547,3.53125c0.22656,0.71484 2.21484,6.10156 9.35156,5.15234c0.00391,0.78906 0,1.1875 -0.00781,1.50391v0.55859c0,0.32422 -0.09766,0.8125 -0.20703,1.12891c-10.37109,-3.77344 -17.79297,-13.72656 -17.79297,-25.37891c0,-14.88672 12.11328,-27 27,-27zM30.75781,7.00391c-3.89844,0.04297 -7.75391,1.07031 -11.14844,3.01172c-0.48047,0.26953 -0.64844,0.88281 -0.375,1.35938c0.18359,0.32422 0.51953,0.50781 0.87109,0.50781c0.16797,0 0.33594,-0.04297 0.49219,-0.13281c4.13672,-2.35937 9.01953,-3.24219 13.74219,-2.48437c0.54297,0.08984 1.05469,-0.28125 1.14453,-0.82812c0.08594,-0.54687 -0.28516,-1.05859 -0.82812,-1.14453c-0.51953,-0.08203 -1.0625,-0.12891 -1.62695,-0.12891z" />
                                                                  </g>
                                                            </g>
                                                      </svg>
                                                </a>
                                          </p>
                                    </div>
                              ))}
                              <div
                                    className="absolute w-60 h-60 right-7 top-20 bg-pink-950 dark:bg-pink-600 opacity-20 dark:opacity-10 blur-xl rounded-full z-0">
                              </div>
                        </div>
                  </div>
            </div>
      );
}
