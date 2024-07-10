import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={notoSerif.className}>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>
            <Header />
            {children}
            <Footer />
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}