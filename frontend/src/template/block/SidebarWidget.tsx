import React, { ReactNode } from "react";

const SidebarWidget = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="overflow-hidden p-8 rounded-md border mb-8">
      <h3 className="text-black">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default SidebarWidget;
