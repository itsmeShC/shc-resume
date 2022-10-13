import { FaHandPointRight } from "react-icons/fa";
import { AiOutlineDrag } from "react-icons/ai";

export default function Instructions() {
  return (
    <div className="usage card">
      <h2>Basic Usage</h2>
      <div className="usage-inst">
        <ul>
          <li>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp; <strong>Noobtodev Resume builder</strong> has Standard
            Formats of Resume templates for the students. Create your own free
            Resume here or use this sample format.
          </li>
          <li>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp; This is an editable Resume for the students. You can modify
            and create your own free resume by just clicking on any text in the
            resume and <strong>Download your Resume as PDF</strong>.
          </li>
          <li>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp; Positively don&apos;t refresh the page or close the tab
            before completing and downloading the resume.
          </li>
          <li>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp; You can edit, add and remove any skill in skills section.
          </li>
          <li>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp; By Grabbing <AiOutlineDrag /> you can drag and drop some of
            the sections, try it.
          </li>
          <li className="mt-20">
            <span>
              <h2>HELP!! </h2>
            </span>
            <p className="mt-20">
              If resume's pdf is showing any margin while downloading, then
              change the setting margins in the download prompt - 'default' to 'none' then click download on the prompt.
            </p>
          </li>
        </ul>
        <div className="g-sec">
          <h2>Contribute</h2>
          <p className="mt-20">
            Any suggestions are welcome! Write to us for the Feedbacks,
            we&apos;ll keep on working and improving the Resume builder in
            future. We will made it simpler for you!
          </p>
          <p>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp;&nbsp;
            <a
              href="https://instagram.com/noobtodev"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          <p>
            <span>
              <FaHandPointRight />
            </span>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/company/noobtodev/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
