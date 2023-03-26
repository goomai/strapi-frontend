import { FC, Fragment } from "react";
import { Tiles10 } from "components/elements/tiles";
import ListColumn from "components/reuseable/ListColumn";
// -------- data -------- //
import { aboutList3, aboutList1 } from "data/about";

const About11: FC = () => {
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-12 align-items-center">
        <div className="d-md-block d-lg-block d-none col-lg-6 order-lg-2">
          <Tiles10 />
        </div>

        <div className="col-lg-6">
          <h1 className="display-4 mb-3">About Goom</h1>
          <p className="lead fs-lg">
            At Goom, we aim to provide developers with the resources and
            frameworks they need to learn Machine Learning (ML), Artificial
            Intelligence (AI), and Data Science.
          </p>
          <p className="mb-6">
            You can find tutorials, articles, and sample code to help you learn
            the frameworks and topics mentioned below which are the building
            blocks to lean AI and ML.
          </p>

          <ListColumn rowClass="gx-xl-8" list={aboutList1} />
        </div>
      </div>

      {/* <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
        {aboutList3.map(({ id, title, description }) => (
          <div className="col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                  <span className="number fs-18">{id}</span>
                </div>
              </div>

              <div>
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </Fragment>
  );
};

export default About11;
