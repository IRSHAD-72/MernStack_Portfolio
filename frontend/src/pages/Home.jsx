export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 space-y-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Name & Professional Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Irshad Mohammed Sheikh</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          MERN Stack Developer | Java | MySQL | Microservices | Linux
        </p>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          I build responsive and interactive web applications using modern technologies. Passionate about learning and delivering high-quality software solutions.
        </p>
      </section>

      {/* Personal Details */}
      <section className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Personal Details 📝</h2>
        <p><strong>Location:</strong> Rajasthan, India</p>
        <p><strong>Education:</strong> MCA in Computer Science</p>
        <p><strong>Phone:</strong> +91 9950330686</p>
        <p>
          <strong>Email:</strong> 
          <a href="mailto:irshadmohsheikh28@gmail.com" className="text-blue-600 ml-1">
            irshadmohsheikh28@gmail.com
          </a>
        </p>
      </section>

      {/* Connect Section */}
      <section className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Connect with Me 🌐</h2>
        <p>
          GitHub: 
          <a href="https://github.com/IRSHAD-72" target="_blank" className="text-blue-600 ml-1">
            github.com/IRSHAD-72
          </a>
        </p>
        <p>
          LinkedIn: 
          <a href="https://linkedin.com/in/irshad" target="_blank" className="text-blue-600 ml-1">
            linkedin.com/in/irshad
          </a>
        </p>
        <p>
          Twitter: 
          <a href="https://twitter.com/irshad" target="_blank" className="text-blue-600 ml-1">
            @irshad
          </a>
        </p>
      </section>

    </div>
  );
}
