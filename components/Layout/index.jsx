import Header from '../Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <h1>Footer</h1>
    </div>
  );
}
