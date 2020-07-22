import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  margin-left: auto;
  margin-bottom: 0;
  background: linear-gradient(
    to right,
    #ff6961 ${(props) => props.scroll},
    transparent 0
  );
  width: 80%;
  height: 4px;
  z-index: 3;
`;

export default Progress;
