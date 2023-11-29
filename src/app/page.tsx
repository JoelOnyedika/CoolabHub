import Navbar from '../components/landingpage/Navbar'
import Hero from '../components/landingpage/Hero'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='mt-3'>
        <Hero />
      </div>
    </main>
  )
}
