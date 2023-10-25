import { FC } from "react";
import Image from "next/image";
// -------- custom component -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// -------- data -------- //
import footerNav, { helps } from "data/footer";

const Footer9: FC = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <div className="mb-4">
                <img src="/img/logo.png" srcSet="/img/logo@2x.png 2x" alt="" />
                <img alt="logo" src={`/img/logo2-light.svg`} className="px-2" />
              </div>
              <p className="mb-4">
                © 2022 Goom.AI. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Need Help?</h4>
              <ul className="list-unstyled  mb-0">
                <li>
                  <NextLink
                    title="Python Compiler"
                    href={"/python-compiler-playground"}
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                <li>
                  <NextLink title={"About us"} href={"/about"} />
                </li>
                <li>
                  <NextLink title={"Contact Us"} href={"/contact"} />
                </li>
                <li>
                  <NextLink title={"Terms & Conditions"} href={"/terms"} />
                </li>
                <li>
                  <NextLink title={"Privacy Policy"} href={"/privacy"} />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
              <address>Keevs Health India Pvt Ltd, Plot No 129, Flat No 202, 2nd Floor, SVE Sreyas, Kavuri Hills, Madapur, Hyderabad TG 500033 IN.</address>
              <NextLink title="hello@goom.ai" href="mailto:hello@goom.ai" />
              <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer9;
