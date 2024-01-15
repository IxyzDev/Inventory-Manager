import "@/styles/globals.css";

import Nav from "@/components/navegacion/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Loan Manager",
  description: "Administra tus prestamos de manera facil y rapida",
};
// suppressHydrationWarning={true}
const RootLayout = ({ children }) => {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body>
        <main>
          <Provider>
            <Nav />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
