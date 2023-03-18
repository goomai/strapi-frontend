import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import IconBox from "../IconBox";
import NextLink from "../links/NextLink";

// ================================================
type ServiceCard6Props = {
  icon: string;
  title: string;
  linkUrl: string;
  description: string;
  iconBoxClassNames?: HTMLAttributes<HTMLDivElement>["className"];
};
// ================================================

const ServiceCard6: FC<ServiceCard6Props> = (props) => {
  const { title, linkUrl, description, icon, iconBoxClassNames } = props;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="card-body">
          {/* <IconBox icon={icon} className={iconBoxClassNames} /> */}
          <Image src={icon} alt="cd icon" className="mb-5" />
          <h4>{title}</h4>
          <p className="mb-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

// set deafult Props
ServiceCard6.defaultProps = {
  iconBoxClassNames: "icon btn btn-circle btn-lg btn-primary pe-none mb-5",
};

export default ServiceCard6;
