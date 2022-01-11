import React from 'react';
import styled from 'styled-components';
import Rainbow from './Rainbow';
// ----------------------------------
// STYLES
// ----------------------------------
const Wrapper = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
function App() {
  return (
    <Wrapper>
      <Rainbow>
        <Rainbow circle />
      </Rainbow>
    </Wrapper>
  );
}

export default App;
