import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={"container mx-auto px-4 max-md:px-2 " + className}>
      {children}
    </div>
  );
}
