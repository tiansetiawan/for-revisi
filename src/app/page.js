import Navbar from './components/navbar';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import FloatingChatPanel from './components/FloatingChatPanel';

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingChatPanel />
      <Beranda />
      <Footer />
    </>
  );
}
