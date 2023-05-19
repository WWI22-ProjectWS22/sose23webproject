// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
// own css files here
import "../styles/customcss.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiderBar from "@/components/siderBar";


export const metadata = {
  title: 'SoSe23 Webproject',
  description: 'SoSe23 WebProject',
}

export default function RootLayout({children}) {
    metadata.title = "test";
  return (
      <html lang={"de"}>
        <body>
          <Header/>
          <SiderBar/>
          {children}
          <Footer/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                  crossOrigin="anonymous"></script>
        </body>

      </html>
  )
}
