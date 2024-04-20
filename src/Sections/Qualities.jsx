import { useEffect } from "react";
import {data} from "../restAPI.json";

const Qualities = () => {

    const qualityTitles = data[0].ourQualities.map(e => e.title);


  return (
    <div className="bg-base-200 mt-16 text-center min-h-fit">
        <div className=" w-screen text-center text-9xl font-thin my-10 pb-10 shadow-lg pt-10">
            OUR QUALITIES ...
        </div>

    <div className="flex flex-col w-full  bg-base-200 min-h-fit">
    <div className="divider divider-start text-6xl md:text-7xl h-fit">{qualityTitles[0]}
    <svg xmlns="http://www.w3.org/2000/svg" width={120} height={120} viewBox="0 0 24 24"><path fill="black" d="M8.51 12.48a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4.48a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m8.5-1.43a3 3 0 0 0-2.3-.29a2.9 2.9 0 0 0-1.09.56L5.51 2.13a1 1 0 0 0-1 0A1 1 0 0 0 4 3v13.17A2.94 2.94 0 0 0 2 19a3 3 0 0 0 2.92 3h.58a18.57 18.57 0 0 0 16.11-9.41a3 3 0 0 0-1.1-4.02ZM6 4.73l9.89 5.71A12.57 12.57 0 0 1 6 16Zm13.87 6.88A16.58 16.58 0 0 1 5 20a1 1 0 0 1-1-1a1 1 0 0 1 .3-.72A1 1 0 0 1 5 18h.51a14.5 14.5 0 0 0 12.62-7.37a.9.9 0 0 1 .58-.44a1 1 0 0 1 .75.09a1 1 0 0 1 .42 1.33Z"></path></svg>
    </div>
    <div className="divider text-5xl md:text-7xl">{qualityTitles[1]}
    <svg xmlns="http://www.w3.org/2000/svg" width={280} height={220} viewBox="0 0 640 512"><path fill="black" d="M256 48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3v-32c0-26.5-21.5-48-48-48H256zm315.3 299.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16V310.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0M0 176c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zm352 80v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256zm-208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path></svg>
     </div>
    <div className="divider divider-end text-6xl md:text-7xl h-fit">{qualityTitles[2]}
    <svg xmlns="http://www.w3.org/2000/svg" width={120} height={120} viewBox="0 0 48 48"><g fill="none" stroke="black" strokeLinejoin="round" strokeWidth={4}><path d="M24 44c9.941 0 18-8.059 18-18S33.941 8 24 8S6 16.059 6 26s8.059 18 18 18Z"></path><path strokeLinecap="round" d="M24 8c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5 29s-2 4-7 4s-7-4-7-4"></path><path strokeLinecap="round" d="M31 33s1.5-4-1-4s-3 7-3 7m6-15h-4m-12-2v4M4 24v4m40-4v4"></path></g></svg>
     </div>
  </div>
  </div>
  )
}

export default Qualities
