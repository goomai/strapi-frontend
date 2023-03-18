import { FC } from "react";
// -------- data -------- //
import { cases, faq } from "data/demo-11";
import Image from "next/image";
import gpt from "../../../assets/svgs/gpt.svg";
const FAQ5: FC = () => {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10">
      {/* <h2 className="fs-15 text-uppercase text-primary mb-3">
            What We Do?
          </h2> */}
      <h3 className="display-5 col-lg-12 mb-10 px-xl-6">Use Cases</h3>
      {cases.map((item) => (
        <div className="col-lg-6 mb-9 mt-0" key={item.id}>
          <div className="d-flex flex-row">
            <div>
              <span className="icon btn btn-sm btn-circle  pe-none me-5">
                <Image src={gpt} alt="cd icon" />
              </span>
            </div>
            <div>
              <h4>{item.title}</h4>
              <p className="mb-0">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ5;
