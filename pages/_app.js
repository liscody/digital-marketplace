import '../styles/globals.css'
import './app.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6" style={{backgroundColor:'#6a5acd'}}>
        <p className="text-4xl font-bold text-white">Ihor NFTs Marketplace</p>
        <div className="flex mt-4 justify-center">
          <Link href="/">
            <a className="mr-4 text-white-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-white-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-white-500">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-white-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp