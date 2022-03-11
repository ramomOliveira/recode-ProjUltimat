import Footer from '../Footer';
import Header from '../Header';
import { Container } from './style';

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}

      <Footer />

    </Container>
  );
}
