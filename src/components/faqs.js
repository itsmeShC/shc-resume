const Faqs = () => {
    return (
      <>
        <h2 className="faq-h2 white">Frequently Asked Question?</h2>
        <div class="accordion mt-20" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What makes NoobtoDev Resume Builder a perfect tool to prepare
                your job application?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>NoobtoDev free resume builder.</strong>
                <br />
                NoobtoDev assists you in creating a resume to be proud of. It's
                modern, easy to use and people remember it. The tool walks you
                through each step of the process, allowing you to highlight your
                accomplishments, attitude, and personality.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Is NoobtoDev Resume Builder is really free?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes, NoobtoDev resume builder is a free tool, all features are
                free and there is no paywall.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Which resume template you suggest?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Like resumes in general, the layout is quite personal and
                depends on your preferences, the firm you are applying to, and
                the amount of room your resume requires. Do not be afraid to
                experiment a little because you can change the layout of your
                resume within the programme with only a few clicks.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Should my resume be in PDF or Word format?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                You can build a PDF resume using NoobtoDev resume builder, which is currently the
                most popular and favoured format among recruiters. It will
                guarantee that both the resume's layout and all of your
                information are preserved.
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Faqs;