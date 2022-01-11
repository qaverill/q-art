import React from 'react';
import styled from 'styled-components';
// ----------------------------------
// STYLES
// ----------------------------------
const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  ${(props) => props.diamond && 'transform: rotate(45deg);'}
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  ${(props) => props.circle && 'border-radius: 1000px / 500px;'}
`;
// ----------------------------------
// COMPONENTS
// ----------------------------------
function Rainbow(props) {
  const { children } = props;
  return (
    <Border {...props}>
      <Line color="purple" {...props}>
        <Line color="blue" {...props}>
          <Line color="green" {...props}>
            <Line color="yellow" {...props}>
              <Line color="orange" {...props}>
                <Line color="red" {...props}>
                  <Line color="black" {...props}>
                    {children}
                  </Line>
                </Line>
              </Line>
            </Line>
          </Line>
        </Line>
      </Line>
    </Border>
  );
}

export default Rainbow;
