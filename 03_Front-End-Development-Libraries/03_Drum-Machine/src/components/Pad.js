import React from "react";

import styled from "styled-components";

const DrumPad = styled.div`
  background: #101010;
  width: 64px;
  height: 64px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

const Pad = () => {
  return <DrumPad />;
};

export default Pad;
