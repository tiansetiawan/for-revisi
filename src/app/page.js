import Beranda from './beranda/Beranda';
import FloatingChatPanel from './components/FloatingChatPanel';
import ScreenSaver from './components/ScreenSaver';

export default function Home() {
  return (
    <>
    <ScreenSaver/>
      <FloatingChatPanel />
      <Beranda />
    </>
  );
}
