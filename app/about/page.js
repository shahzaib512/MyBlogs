import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Shahzaib, a passionate software developer who has dedicated the last 2 years to mastering the art of coding. My journey has been a blend of excitement and challenges, driven by a deep-seated enthusiasm for technology and problem-solving.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                My career began as an accountant in a school, but it wasn’t long before I realized that my true calling was in programming. Despite the initial struggles and the need to balance work with my personal life, I made a pivotal decision to shift my focus. I embarked on a journey of self-improvement, cutting out distractions and honing my skills in coding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Shahzaib's Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From a humble beginning to a dedicated programmer, discover how Shahzaib navigated his career transition and embraced the world of technology.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/3.jpg"
                  alt="Shahzaib starting out"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Realizing the Potential</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Faced with the monotony of a desk job, Shahzaib sought something more fulfilling. He realized that his true passion lay in coding, a field where creativity and problem-solving are paramount. Determined to make a change, he redirected his focus from the distractions of daily life to self-improvement and programming.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/2.jpg"
                  alt="Shahzaib diving deeper into coding"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Finding the Passion for Programming</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Embracing a disciplined routine, Shahzaib began his deep dive into programming. Rising early at 4 AM, he engaged in a structured routine of prayer, running, and meditation before immersing himself in coding. His choice to learn from books rather than online videos laid a strong foundation, fueling his growing passion for programming.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/1.jpg"
                  alt="Shahzaib tackling challenges"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Embracing Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  The journey through programming was fraught with challenges, but Shahzaib’s dedication never wavered. He embraced the difficulties, understanding that mastery required persistent effort and daily practice. This commitment enabled him to clarify complex concepts and build confidence in his skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/4.jpg"
                  alt="Shahzaib mentoring others"
                  width={500}
                  height={300}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Path Forward</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Shahzaib is on an exciting path, focusing on advanced fields like machine learning and deep learning. His rigorous routine and unwavering commitment drive him towards his goals. With every step, he remains dedicated to his dream of making a significant impact in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
