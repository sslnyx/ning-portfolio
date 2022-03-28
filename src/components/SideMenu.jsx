import { useOutletContext } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SideMenu = ({className}) => {
  const data = useOutletContext();

  const { menuItems } = data.find(
    (element) => Object.keys(element)[0] === "menuItems"
  );

  return (
    <div className={`${className}`}>
      {menuItems.map(({ label, hash }, i) => (
        <HashLink smooth key={i} to={{ path: "/", hash }} className="text-underline last:mb-0">
          {label}
        </HashLink>
      ))}
    </div>
  );
};

export default SideMenu;
