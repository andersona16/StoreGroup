import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 0fr;
  grid-column-gap: 80px;
  grid-row-gap: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 40px;
  justify-content: center;
  gap: 20px;

  margin-bottom: 100px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
