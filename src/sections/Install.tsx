import { Element } from "react-scroll";

const installSteps = [
  {
    id: 1,
    title: "Download the installer",
    description: "Get the latest version of Lumiro Desk for Windows 10 and 11.",
    image: "/images/install/one111.png",
  },
  {
    id: 2,
    title: "Run the installer",
    description: "Execute the downloaded file to begin the installation process.",
    image: "/images/install/one.png",
  },
  {
    id: 3,
    title: "Complete installation",
    description: "Follow the on-screen instructions to finish setup.",
    image: "/images/install/second.png",
  },
];

const Install = () => {
  return (
    <section>
      <Element name="install">
        <div className="relative pb-24 pt-16 max-lg:pb-20 max-md:py-12">
          <div className="container">
            {/* Header Section */}
            <div className="text-center mb-16 max-md:mb-12">
              <span className="small-2 px-4 py-1.5 rounded-full border border-s3 bg-s2 text-p4">
                Installation Guide
              </span>
              <h3 className="h3 max-lg:h4 max-md:h5 mt-6 mb-4 text-p4 mx-auto max-w-2xl">
                Installing on Windows
              </h3>
              <p className="body-1 max-w-2xl mx-auto text-p5">
                Windows may show a SmartScreen warning on first launch because the app isn't 
                code-signed yet. This is normal — the app is fully offline and your data never 
                leaves your PC.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {installSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col p-6 rounded-2xl border border-s3 bg-s2 hover:border-s4 transition-colors duration-300"
                >
                  {/* Step Number Badge */}
                  <div className="mb-4">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-s4 bg-s2 text-lg font-bold text-p4">
                      {step.id}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="mb-4 flex-1">
                    <div className="relative rounded-xl overflow-hidden border border-s3 h-[300px] w-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="pt-4 border-t border-s3/50">
                    <h4 className="h6 text-p4 mb-2">
                      {step.title}
                    </h4>
                    <p className="body-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Tips */}
            <div className="mt-16 max-md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-s3 bg-s2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-s3 bg-s1 text-p4">
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h5 className="small-1 text-p4">No Account Needed</h5>
                  <p className="text-xs text-p5 mt-0.5">Download and use immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-s3 bg-s2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-s3 bg-s1 text-p4">
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <h5 className="small-1 text-p4">100% Offline</h5>
                  <p className="text-xs text-p5 mt-0.5">Works without internet connection</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-s3 bg-s2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-s3 bg-s1 text-p4">
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h5 className="small-1 text-p4">Private & Secure</h5>
                  <p className="text-xs text-p5 mt-0.5">Your data stays on your PC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Install;
