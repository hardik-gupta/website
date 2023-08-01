import React from "react";
import Image from 'next/image'
import { discordIcon, githubLogo, linkedinIcon, youtubeIcon } from "@/component/assets/images";

export const Footer = () => {
  return (
    <div className="mx-auto md:mx-auto sm:flex sm:flex-row-reverse justify-around  sm:pb-6 lg:mb-5 py-8 text-black" id="footer">
      <div className="footerBox2 grid grid-row-2 sm:place-items-start place-items-center">
        <h4 className="lg:text-2xl md:text-xl text-lg">Contact Us</h4>
        <p className="lg:text-base md:text-sm text-xs">
          Have questions? Write to us at&nbsp;
          <b>
            <a className="text-inherit" href="mailto:admin@codeforgovtech.in">admin@codeforgovtech.in</a>
          </b>
        </p>
      </div>
      <div className=" my-auto -ml-8 md:-ml-0 mt-3 flex justify-center">
        <ul className="flex space-x-6 md:space-x-8">
          <li className="social-li">
            <div className="rounded-full p-2 bg-stone-200">
              <a href="https://discord.com/invite/s6sfBbqerq">
                <Image src={discordIcon} alt='discord-icon' width={30} height={30}/>
              </a>
            </div>
          </li>
          <li className="social-li">
            <div className="rounded-full p-2 bg-stone-200">
              <a href="https://github.com/Code4GovTech/C4GT/wiki">
                <Image src={githubLogo} alt="github-icon" width={30} height={30}/>
              </a>
            </div>
          </li>
          <li className="social-li">
            <div className="rounded-full p-2 bg-stone-200">
              <a href="https://www.linkedin.com/company/code-4-govtech/">
                <Image src={linkedinIcon} alt="linkedin-icon"width={30} height={30} />
              </a>
            </div>
          </li>
          <li className="social-li">
            <div className="rounded-full p-2 bg-stone-200">
              <a href="https://www.youtube.com/channel/UCIi94fH37KkOYieSBZ4Ew4g">
                <Image src={youtubeIcon} alt="youtube-icon" width={30} height={30} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
