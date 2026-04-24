const projects = [
  {
    number: '01',
    title: 'Varroc DesignCopilot AI',
    subtitle: 'Eureka Challenge 3.0 - Real-time CAD manufacturability validation',
    desc: 'Extracts geometric features from STL files via trimesh and feeds a trained XGBoost model (3,000 samples, R2: 0.92) with rule-based penalty scoring. Integrates SHAP explainable AI to surface DFM violations, estimate cost impact, and auto-export PDF reports.',
    stack: ['FastAPI','Reactjs','Supabase', 'XGBoost', 'SHAP', 'trimesh'],
    year: '2025',
    extra: '+4',
    delay: '',
  },
  {
    number: '02',
    title: 'Gem-Chef',
    subtitle: 'Gemini API Developer Competition',
    desc: 'AI kitchen assistant powered by Google Gemini and Gemini Vision; enables grocery bill scanning for inventory tracking, natural-language recipe generation with dietary preferences, step-by-step cooking mode with real-time visual verification, weekly meal planner with auto-generated grocery lists, and nutrition analytics.',
    stack: ['Google Gemini', 'Gemini Vision API', 'Nextjs', 'JavaScript'],
    year: '2025',
    extra: '',
    delay: 'reveal-delay-1',
  },
  {
    number: '03',
    title: 'SakhiCircle',
    subtitle: "Build2Break '24",
    desc: 'AI-powered credit assessment platform for rural Self-Help Groups; uses Python and Scikit-learn to analyze savings, attendance, and repayment history for creditworthiness prediction, with a Django and PostgreSQL role-based dashboard for data-driven loan approvals.',
    stack: ['Nodejs', 'Reactjs', 'Mongodb', 'Expressjs', 'Machine Learning'],
    year: '2024',
    extra: '',
    delay: 'reveal-delay-2',
  },
  {
    number: '04',
    title: 'Plant Classification System',
    subtitle: 'Deep learning plant recognition with transfer learning and U-Net segmentation',
    desc: 'Deep learning plant recognition system using transfer learning; compared DenseNet121, ResNet50, EfficientNetB0, and VGG16 with TensorFlow and Keras, applied U-Net segmentation with OpenCV preprocessing (CLAHE, HSV filtering, denoising), and used an ensemble approach for top-5 confidence predictions.',
    stack: ['Python', 'TensorFlow', 'Keras', 'U-Net', 'OpenCV', 'DenseNet121', 'ResNet50', 'EfficientNetB0', 'VGG16', 'NumPy'],
    year: '2024',
    extra: '',
    delay: 'reveal-delay-3',
  },
  {
    number: '05',
    title: 'AcadSecure',
    subtitle: 'Secure academic communication portal',
    desc: 'Secure academic communication portal with layered cybersecurity; implements AES-256-CBC, RSA-2048, PBKDF2-SHA-512, JWT authentication, OTP-based MFA, and RBAC to manage Admin, Faculty, and Student permissions across all workflows.',
    stack: ['Node.js', 'MongoDB', 'AES-256-CBC', 'RSA-2048', 'SHA-512', 'RBAC', 'Cryptography'],
    year: '2025',
    extra: '',
    delay: 'reveal-delay-4',
  },
  {
    number: '06',
    title: 'VeraCT - Fake News Detection',
    subtitle: 'NLP-powered credibility chatbot',
    desc: 'Analyzes user-submitted news, detects misinformation, and generates a credibility-based trust score using Scikit-learn. Conversational interface built for quick fact-check workflows.',
    stack: ['NLP', 'Python', 'Scikit-learn'],
    year: '2024',
    extra: '',
    delay: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#F8F1E6] px-4 pb-[96px] pt-[126px] md:px-8 md:pb-[124px] md:pt-[146px]">
      <div className="mx-auto max-w-[1780px]">
        <div className="reveal mx-auto max-w-[1520px]">
          <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-mid-gray/80">
            <span>03 / Selected Work</span>
            <span>Things I've Built</span>
          </div>

          <h2 className="mt-8 font-playfair text-[clamp(3.1rem,5.5vw,5.45rem)] leading-[0.98] tracking-[-0.02em] text-blackish">
            Selected <em className="italic">projects.</em>
          </h2>

          <div className="mt-9 border-t border-blackish/12" />
        </div>

        <div className="mx-auto max-w-[1520px]">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`reveal ${project.delay} group grid grid-cols-1 gap-5 border-b border-blackish/12 py-8 transition-colors duration-300 hover:bg-[#EEE5D8]/40 md:grid-cols-[0.06fr_0.62fr_0.18fr_0.06fr_0.08fr] md:gap-4`}
            >
              <div className="pt-1 text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray">{project.number}</div>

              <div>
                <h3 className="font-playfair text-[clamp(2.35rem,4.2vw,4.4rem)] leading-[0.92] tracking-[-0.02em] text-blackish transition-all duration-300 group-hover:italic group-hover:tracking-[-0.03em]">{project.title}</h3>
                <div className="mt-1.5 font-cormorant text-[1.02rem] italic text-mid-gray transition-colors duration-300 group-hover:text-blackish/80">{project.subtitle}</div>
                <p className="mt-4 max-w-[720px] text-[0.84rem] leading-[1.75] text-dark-gray transition-colors duration-300 group-hover:text-blackish">{project.desc}</p>
              </div>

              <div className="flex flex-wrap items-start content-start gap-1.5 pt-2 md:justify-end">
                {project.stack.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-blackish/16 bg-[#F0E4D3] px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.14em] text-mid-gray"
                  >
                    {chip}
                  </span>
                ))}
                {project.extra ? <span className="pt-1 text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray">{project.extra}</span> : null}
              </div>

              <div className="pt-2 text-[0.62rem] uppercase tracking-[0.2em] text-mid-gray md:text-right">{project.year}</div>

              <div className="flex md:justify-end">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-blackish/35 text-[0.95rem] text-blackish transition-colors duration-200 group-hover:bg-blackish group-hover:text-cream"
                  aria-label={`Open ${project.title}`}
                >
                  ↗️
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}