// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import "../styles/customcss.css";


export const metadata = {
  title: 'SoSe23 WebProject',
  description: 'SoSe23 WebProject',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
