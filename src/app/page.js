import Beranda from './beranda/Beranda';
import FloatingChatPanel from './components/FloatingChatPanel';
import LoadingWrapper from "./components/LoadingWrapper";

export default function Home() {
  return (
    <>
    <LoadingWrapper>
      <FloatingChatPanel />
      <Beranda />
    </LoadingWrapper>
    </>
  );
}
