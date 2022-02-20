import LateralMenu from '../LateralMenu';
import HeaderUser from '../HeaderUser';
import Content from '../Content';

export default function LayoutUser({ title, subTitle, children }) {
  return (
    <div>
      <LateralMenu />
      <HeaderUser title={title} subTitle={subTitle} />
      <Content>{children}</Content>
    </div>
  );
}
