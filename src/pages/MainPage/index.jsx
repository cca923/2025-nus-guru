import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Header from "../../containers/Header";
import { handleLoadFolders } from "../../store/folders/service";
import { handleLoadFiles } from "../../store/files/service";
import { folderSelector } from "../../store/selectors";

import { SidebarContainer } from "./styles";
import FolderList from "./FolderList";
import Files from "./Files";
import ActionButtons from "./ActionButtons";

function MainPage() {
  const dispatch = useDispatch();
  const { selectedFolderId } = useSelector(folderSelector);

  useEffect(() => {
    // Load folders "once" when component mounts
    dispatch(handleLoadFolders());
  }, [dispatch]);

  useEffect(() => {
    // Load files when current folder id changed
    if (selectedFolderId) {
      dispatch(handleLoadFiles({ folderId: selectedFolderId }));
    }
  }, [dispatch, selectedFolderId]);

  return (
    <Layout
      sidebar={
        <SidebarContainer>
          <FolderList />
        </SidebarContainer>
      }
    >
      <Header />
      <Files />
      <ActionButtons />
    </Layout>
  );
}

export default MainPage;
