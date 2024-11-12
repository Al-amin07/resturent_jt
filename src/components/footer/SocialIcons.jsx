// import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8 mb-6">
      <div className="flex cursor-pointer items-center justify-center w-12 h-12 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors">
        <CiFacebook size={32} />
      </div>

      <div className="flex cursor-pointer items-center justify-center w-12 h-12 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors">
        <CiTwitter size={32} />
      </div>

      <div className="flex cursor-pointer items-center justify-center w-12 h-12 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors">
        <CiInstagram size={32} />
      </div>

      <div className="flex cursor-pointer items-center justify-center w-12 h-12 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors">
        <CiLinkedin size={32} />
      </div>
    </div>
  );
};

export default SocialIcons;
