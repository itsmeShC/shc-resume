import React, { useState, useEffect, useRef } from "react";
import Resume from "./components/resume";
import "react-edit-text/dist/index.css";
import ReactToPrint from "react-to-print";
import Instructions from "./components/instructions";
import Footer from "./components/footer";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import Nav  from "./components/nav";
import StandardResume from "./components/standardResume";
import Info from "./components/info";
import Faqs from "./components/faqs";

export const Home= (close)=> {
  let [tempClassic, settempClassic] = useState(true);
  let [tempStandard, settempStandard] = useState(false);
  let [showTemp, setshowTemplates] = useState(false);
  let [hideBadge, sethideBadge] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      sethideBadge(false);
    }, 10000);
  })

  const componentRef = useRef();
  const standardRef = useRef();
  const hideRef = React.useRef(null);

  const showClassic = () => {
    settempClassic(true);
    settempStandard(false);
    setshowTemplates(false);
  };

  const showStandard = () => {
    settempClassic(false);
    settempStandard(true);
    setshowTemplates(false);
  };
  return (
    <div>
      <main>
        <div className="header">
          <div className="main-body">
            <div className="pt-1rem">
              <Nav />
            </div>
            <div className="mt-20">
              <Info />
            </div>
          </div>
        </div>
        <div className="main-body">
          {tempClassic && (
            <div className="mt-20">
              <h2 className="white">Classic Resume</h2>
              <Resume ref={componentRef} />
              <div className="btn-grp">
                <ReactToPrint
                  bodyClass="pdf-viewer"
                  content={() => {
                    return componentRef.current;
                  }}
                  trigger={() => (
                    <div className="down-btn blue mb-20">
                      <div className="down-btn-color">
                        <h1 className="m-0">
                          <IoCloudDownloadSharp />
                        </h1>
                        <small>Download</small>
                      </div>
                    </div>
                  )}
                />
                <div
                  className="down-btn blue temp-btn"
                  onClick={() => setshowTemplates(true)}
                >
                  <div className="down-btn-color">
                    {hideBadge && (
                      <span class="badge bg-inherit">
                        New<em>!</em>
                      </span>
                    )}
                    <h1 className="m-0">
                      <IoDocuments />
                    </h1>
                    <small>Templates</small>
                  </div>
                </div>
                {showTemp ? (
                  <div className="temp-tab">
                    <div
                      className="closeTabs"
                      onClick={() => setshowTemplates(false)}
                    >
                      <IoCloseCircleOutline />
                    </div>
                    <div className="temp-tab-wrapper">
                      <div className="temp-wrap">
                        <div className="temp">
                          <h4 className="m-0" onClick={showClassic}>
                            Classic
                          </h4>
                        </div>
                        <div className="temp" onClick={showStandard}>
                          <h4 className="m-0">Standard</h4>
                        </div>
                        <div className="temp">
                          <h4 className="m-0">Professional</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
          {tempStandard ? (
            <div className="mt-20">
              <h2 className="white">Standard Resume</h2>
              <StandardResume ref={standardRef} />
              <div className="btn-grp">
                <ReactToPrint
                  bodyClass="pdf-viewer"
                  content={() => {
                    return standardRef.current;
                  }}
                  trigger={() => (
                    <div className="down-btn blue mb-20">
                      <div className="down-btn-color">
                        <h1 className="m-0">
                          <IoCloudDownloadSharp />
                        </h1>
                        <small>Download</small>
                      </div>
                    </div>
                  )}
                />
                <div
                  className="down-btn blue"
                  onClick={() => setshowTemplates(true)}
                >
                  <div className="down-btn-color">
                    <h1 className="m-0">
                      <IoDocuments />
                    </h1>
                    <small>Templates</small>
                  </div>
                </div>
                {showTemp ? (
                  <div ref={hideRef} className="temp-tab">
                    <div
                      className="closeTabs"
                      onClick={() => setshowTemplates(false)}
                    >
                      <IoCloseCircleOutline />
                    </div>
                    <div className="temp-tab-wrapper">
                      <div className="temp-wrap">
                        <div className="temp">
                          <h4 className="m-0" onClick={showClassic}>
                            Classic
                          </h4>
                        </div>
                        <div className="temp" onClick={showStandard}>
                          <h4 className="m-0">Standard</h4>
                        </div>
                        <div className="temp">
                          <h4 className="m-0">Professional</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="mBtn-grp">
            <div className="mBtn">
              {tempClassic ? (
                <ReactToPrint
                  bodyClass="pdf-viewer"
                  content={() => {
                    console.log(componentRef.current);
                    return componentRef.current;
                  }}
                  trigger={() => (
                    <button className="btn blue w-100">
                      <IoCloudDownloadSharp />
                      <span className="ml-10">Download</span>
                    </button>
                  )}
                />
              ) : (
                <ReactToPrint
                  bodyClass="pdf-viewer"
                  content={() => {
                    return standardRef.current;
                  }}
                  trigger={() => (
                    <button className="btn blue w-100">
                      <IoCloudDownloadSharp />
                      <span className="ml-10">Download</span>
                    </button>
                  )}
                />
              )}
            </div>

            <div className="mBtn mbtn-temp">
              <button
                className="btn blue w-100"
                onClick={() => setshowTemplates(true)}
              >
                <IoDocuments />
                <span className="ml-10">Templates</span>
              </button>
            </div>
          </div>

          <div>
            <Instructions />
          </div>

          <div className="mt-40">
            <Faqs />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
          
}
export default Home;
