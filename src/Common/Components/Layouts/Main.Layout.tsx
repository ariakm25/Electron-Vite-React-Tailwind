import React, { PropsWithChildren, ReactElement } from 'react';

const MainLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <div className="py-4 px-8">{children}</div>
    </>
  );
};

export default MainLayout;
