// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import "../styles/customcss.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata = {
  title: 'SoSe23 WebProject',
  description: 'SoSe23 WebProject',
}

export default function RootLayout({children}) {
  return (
    <html lang="de">
      <head>
        <meta name="color-scheme" content="light dark"/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>

    </html>
  )
}
