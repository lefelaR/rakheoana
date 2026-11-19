import type { IconBaseProps, IconType } from "react-icons";

type IconProps = IconBaseProps & {
  icon: IconType;
};

const Icon = ({ icon, ...props }: IconProps) => {
  const Glyph = icon as (props: IconBaseProps) => JSX.Element;
  return <Glyph {...props} />;
};

export default Icon;
