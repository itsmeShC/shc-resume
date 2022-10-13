import {
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

import {
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

const Info = () => {
  const shareUrl = window.location.href;

  return (
    <div className="info-sec-wrap">
      <div className="info-sec">
        
        <h2 className="m-0">
          NoobtoDev Resume Builder is for the students. Build a Job winning resume for free. Choose any template from Classic, Standard and Professional resume template. You can modify and
          create your own free resume by just clicking on any text in the resume
          and can download your resume.{" "}
          {/* <span ref={resultsRef} onClick={onClick} className="underline">
            Read more Instructions!
          </span> */}
        </h2>
      </div>
      <div className="share-icons-sec mt-20">
        <div className="share-icons-txt gray-color m-0">
          
          <div>
            <p>Share with your friends!</p>
            <div className="share-icons mt-10">
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={24} round={true} />
              </WhatsappShareButton>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={24} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={24} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={24} round={true} />
              </TwitterShareButton>
              <RedditShareButton url={shareUrl}>
                <RedditIcon size={24} round={true} />
              </RedditShareButton>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={24} round={true} />
              </TelegramShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={24} round={true} />
              </EmailShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
