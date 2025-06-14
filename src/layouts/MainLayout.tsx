import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { theme } from '../config/theme';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Height of the header
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MainLayout; 