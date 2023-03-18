import { FC, ReactElement } from "react";
import NextLink from "./NextLink";

// =========================================================
type ListItemLinkProps = {
  href: string;
  liClassName?: string;
  linkClassName?: string;
  title: string | ReactElement;
};
// =========================================================

const ListItemLink: FC<ListItemLinkProps> = (props) => {
  const { linkClassName = " ", liClassName = "", href, title } = props;

  return (
    <li className={liClassName}>
      <NextLink className={linkClassName} href={href} title={title} />
    </li>
  );
};

export default ListItemLink;
