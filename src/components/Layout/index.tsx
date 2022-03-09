import {PropsWithChildren} from 'react';
import Header from '../Header';

const Layout = ({children}: PropsWithChildren<{}>) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
