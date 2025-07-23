export interface NavLinkProp {
  title: string;
}
export interface ButtonProp {
  icon?: string;
  children?: string;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
}

export interface FaqProp {
  item: {
    id:string;
    question: string;
    answer: string;
  };
  index: number;
}
