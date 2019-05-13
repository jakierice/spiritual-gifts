// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react';

import logIn from '../../actions/logIn';
import FirebaseAuth from '../misc/FirebaseAuth';
import {
  Button,
  Footer,
  Header,
  HeaderFooterWrapper,
  HeaderLink,
  InternalLink,
} from '../../ui-elements';

const Layout = ({ children }) => (
  <HeaderFooterWrapper>
    <Header>
      <HeaderLink to="/">Spiritual Gifts</HeaderLink>
      <InternalLink to="/position">Positions</InternalLink>
      <InternalLink to="/candidate">Candidates</InternalLink>

      <div style={{ float: 'right' }}>
        {/* <HeaderLink to="/search">
          <span role="img" aria-label="search">
            🔎
          </span>
        </HeaderLink>{' '} */}
        <FirebaseAuth>
          {({ isLoading, error, auth }) => {
            if (isLoading) {
              return '...';
            }
            if (error) {
              return '⚠️ login error';
            }
            if (auth) {
              return (
                <HeaderLink to={'/account'}>
                  <span role="img" aria-label="account">
                    👤
                  </span>
                </HeaderLink>
              );
            } else {
              return <Button onClick={logIn}>Log in</Button>;
            }
          }}
        </FirebaseAuth>
      </div>
    </Header>

    {children}

    <Footer>© {new Date().getFullYear()}</Footer>
  </HeaderFooterWrapper>
);

export default Layout;
