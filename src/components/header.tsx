import type { FC, PropsWithChildren } from "react";

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="h-12 w-full flex px-4 sm:px-16 py-2 items-center justify-between border-b-slate-100 border border-solid">
      {children}
    </header>
  );
};
