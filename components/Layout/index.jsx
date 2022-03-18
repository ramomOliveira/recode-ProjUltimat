import Footer from '../Footer';
import Header from '../Header';
import MenuBurger from '../MenuBurger';
import { Container } from './style';

export default function Layout({ children }) {
  return (
    <Container>
      <MenuBurger />
      <Header />
      {children}

      <Footer />

    </Container>
  );
}
