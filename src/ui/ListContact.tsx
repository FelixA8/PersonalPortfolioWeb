import { listSocialMedia } from "../lib/contact";
import IconComponent from "./IconComponent";

const ListContact = () => {
  const medias = listSocialMedia;

  return (
    <ul className="flex items-center">
      {medias.social.map((media) => (
        <li key={media.name}>
          <a
            href={media.link}
            target="_blank"
            className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-gray-300 border-gray-300 hover:border-primary hover:bg-primary hover:text-white"
          >
            <IconComponent>{media.logo}</IconComponent>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListContact;
