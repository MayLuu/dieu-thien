import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dieu Thien Restaurant",
    template: "%s | Dieu Thien Restaurant",
  },
  description: "Dieu Thien Restaurant",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@100;200;300;400;500;600;700;800;900&display=swap"
      />
    </head>
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
