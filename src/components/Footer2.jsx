import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";

const Footer2 = () => {
  return (
    <div className="">
      {/**  Footer */}
      <footer className="text-center text-lg-start bg-light text-muted "style={{overflow:'hidden'}}>
        {/**  Section: Social media */}

        {/**  Section: Links  */}
        <section className="pt-2">
          <div className="container text-center text-md-start mt-5">
            {/**  Grid row */}
            <div className="row mt-3">
              {/**  Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/**  Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i
                    className="fas fa-gem me-3"
                    style={{ fontWeight: "bold" }}
                  ></i>
                  PN
                </h6>
                <p>Here we can right a discription for the page and also talk about the wether by the way 
                  it is sunny today  
                </p>
              </div>
              {/**  Grid column */}

              {/**  Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/**  Links */}
                <h6 className="text-uppercase fw-bold mb-4">Social media</h6>
                <p>
                  <a href="#!" className="text-reset">
                    <FacebookIcon /> Facebook
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <InstagramIcon /> Instagram
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <TwitterIcon /> Twitter
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </p>
              </div>
              {/**  Grid column */}

              {/**  Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/**  Links */}
                <h6 className="text-uppercase fw-bold mb-4">col</h6>
                <p>
                  <a href="#!" className="text-reset">
                    asd
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    asdsada
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Others
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/**  Grid column */}

              {/**  Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/**  Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas "></i>
                  <HomeOutlinedIcon className="mb-1" /> Homs , Ain algara
                </p>
                <p>
                  <i className="fas "></i>
                  <EmailOutlinedIcon className="mb-1" /> info@example.com
                </p>
                <p>
                  <i className="fas "></i>
                  <LocalPhoneOutlinedIcon className="mb-1" /> 0999999999
                </p>
                <p>
                  <i className="fas "></i>
                  <FaxOutlinedIcon className="mb-1" /> 0922222222
                </p>
              </div>
              {/**  Grid column */}
            </div>
            {/**  Grid row */}
          </div>
        </section>
        {/**  Section: Links  */}

        {/**  Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            A.P.S
          </a>
        </div>
        {/**  Copyright */}
      </footer>
      {/**  Footer */}
    </div>
  );
};
export default Footer2;
