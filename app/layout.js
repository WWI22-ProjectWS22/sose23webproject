// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import "../styles/customcss.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export const metadata = {
  title: 'SoSe23 Webproject',
  description: 'SoSe23 WebProject',
}

export const bodyid ={
  id: 'body',
}

export default function RootLayout({children}) {
    metadata.title = "test";
  return (
      <html lang="de">
        <head>
          <meta name="color-scheme" content="light dark"/>
          <title>Homepage</title>
        </head>
        <body id = {bodyid.id}>
          <Header/>
          {children}
          <Footer/>
        </body>

      </html>
  )
}
