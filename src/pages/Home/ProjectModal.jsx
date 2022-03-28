import GithubIcon from "../../components/GithubIcon";
import GlobalIcon from "../../components/GlobalIcon";
import LinkIcon from "../../components/LinkIcon";

const ProjectModal = ({ activeCard, openModal, setOpenModal }) => {
  const { title, content, link, github, img, className, built_with, year } =
    activeCard;
  console.log(activeCard);
  return (
    <div
      className={`transition-opacity duration-500 opacity-0 pointer-events-none fixed h-screen w-screen top-0 left-0 z-50 ${
        openModal ? "activeModal" : ""
      }`}
    >
      <div
        onClick={() => {
          setOpenModal(false);
        }}
        className="absolute h-full w-full left-0 top-0 bg-awhite opacity-90"
      />

      <div className="flex h-full w-full justify-center items-center">
        <div className="container bg-white relative p-0 max-w-[1200px]">
          <div
            onClick={() => {
              setOpenModal(false);
            }}
            className="close"
          ></div>

          <div className="flex flex-col md:flex-row h-[70vh] max-h-[800px] overflow-hidden">
            <div className="basis-1/2 p-5 pb-0 top-0 left-0 md:h-full w-full overflow-hidden">
              <img
                className="h-full w-full md:opacity-100 grayscale-0 md:basis-1/2 pb-0 md:pb-5 object-cover object-left-top"
                src={`/img/projects/${img}`}
              />
            </div>
            <div className="basis-1/2 md:basis-1/2 p-5 relative flex items-center text-sm">
              <div>
                <h3 className="text-xl md:text-2xl text-red">{title}</h3>
                <p>{content}</p>
                <h3 className="text-md">Year:</h3>
                <p>{year}</p>
                <h3 className="text-md">Built With: </h3>
                <p>{built_with}</p>
                <h3 className="text-md">Link:</h3>
                <div className="flex h-[40px]">
                  {github ? (
                    <a className="mr-3 flex" target="_blank" href={github}>
                      <GithubIcon />
                    </a>
                  ) : (
                    ""
                  )}
                  {link ? (
                    <a href={link} className="flex" target="_blank">
                      <LinkIcon />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[500px] h-[300px] bg-white relative">{title}</div> */}
      </div>
    </div>
  );
};

export default ProjectModal;
