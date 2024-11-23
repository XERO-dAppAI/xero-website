import { 
  FaXTwitter, 
  FaDiscord, 
  FaGithub, 
  FaYoutube 
} from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
  
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="hover:text-white transition-colors">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaDiscord className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/orgs/XERO-dAppAI/repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-6 font-raleway text-sm">
          A project by Janice and Judith "Blockchain Queens" 
        </p>
        <p className="mt-2 text-xs text-gray-500">
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};
