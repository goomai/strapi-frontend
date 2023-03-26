import Link from "next/link";
import { FC, ReactElement } from "react";

// ==============================================================
type NextLinkProps = {
  href: string;
  className?: string;
  title: string | ReactElement;
};
// ==============================================================

const NextLink: FC<NextLinkProps> = (props) => {
  const { href, className, title } = props;

  return (
    <Link legacyBehavior href={href}>
      <a className={"fs-16"}>{title}</a>
    </Link>
  );
};

export default NextLink;
