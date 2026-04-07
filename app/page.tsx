import Navbar from '../components/Navbar'
import { HomeContent } from '../components/HomeContent'
import { ClientOnly } from '../components/ClientOnly'

export default function Home() {
  return (
    <>
      <Navbar />
      <ClientOnly>
        <HomeContent />
      </ClientOnly>
    </>
  )
}
