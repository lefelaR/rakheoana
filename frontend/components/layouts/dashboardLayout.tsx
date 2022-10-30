import Navbar from '../atoms/navbar'
import Footer from '../atoms/footer'

export default function Layout({ children }:any) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }