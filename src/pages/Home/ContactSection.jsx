import GithubIcon from "../../components/GithubIcon";
import LinkedInIcon from "../../components/LinkedInIcon";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-center md:text-left">Get In Touch</h2>

        <div className="text-center md:text-left">
          <div className="mb-10">
            <p className="mb-5">
              Whether you have a question or just want to say hi, I’ll try my
              best to get back to you!
            </p>

            <a href="mailto:sslnyx@gmail.com" className="btn-primary">
              Say Hello
            </a>
          </div>

          <div className="flex justify-center md:justify-start">
            <a href="https://github.com/sslnyx" className="mr-3" target="_blank">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ning-yu-luo/" target="_blank">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
