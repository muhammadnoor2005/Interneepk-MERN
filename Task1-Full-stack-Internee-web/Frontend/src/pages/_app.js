import '@/styles/globals.css'
import localFont from "next/font/local";


const LeagueSpartan = localFont({src:"../../public/fonts/LeagueSpartan-VariableFont_wght.ttf"});


export default function App({ Component, pageProps }) {
  return( 
   
    <main className={LeagueSpartan.className}>
      <Component {...pageProps} />
    </main>
    
  )
}
