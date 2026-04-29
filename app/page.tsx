import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FloralsPillar from './components/FloralsPillar'
import EventsPillar from './components/EventsPillar'
import EditorialPillar from './components/EditorialPillar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FloralsPillar />
      <EventsPillar />
      <EditorialPillar />
      <Footer />
    </main>
  )
}
