import "./App.css";
import {BrowserRouter} from "react-router";
import {MyModal} from "./components/MyModal/MyModal.tsx";
import {useGlobalStore} from "./store/GlobalStore.ts";
import {MyModalChangeContent} from "./components/MyModalChageContent/MyModalChangeContent.tsx";
import {Route, Routes} from "react-router/internal/react-server-client";
import {HeroPage, MyRegisterPage, RoutePage, MyLoginPage, LandMarkPage, ArticlePage } from "./pages";
import {MyMapPageContainer} from "./modules/map";
import {Toaster} from "sonner";
import 'react-loading-skeleton/dist/skeleton.css';
import {FullscreenLoader} from "./ui/MyFullscreenLoader/MyFullscreenLoader.tsx";

function App() {
  const {modalType, isLoading} = useGlobalStore()

  return (
    <>
      {isLoading ? <FullscreenLoader /> : null}
      <Toaster richColors position={"top-center"} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<MyLoginPage />} />
        <Route path="/routes/:context/map" element={<MyMapPageContainer />} />
        <Route path="/routes/:context/:routeId" element={<RoutePage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="/landmarks" element={<LandMarkPage />} />
        <Route path="/register" element={<MyRegisterPage />} />
      </Routes>

      <MyModal>
        <MyModalChangeContent type={modalType} />
      </MyModal>

    </BrowserRouter>
    </>
  );
}

export default App;
