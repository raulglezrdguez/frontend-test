import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import styled from "styled-components";

interface Props {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  addChannel?: boolean;
}
function SideBarOption({ icon: Icon, title, addChannel = false }: Props) {
  const newChannel = () => {};
  const selectChannel = () => {};
  return (
    <Container onClick={addChannel ? newChannel : selectChannel}>
      <Icon fontSize="small" style={{ padding: ".5rem" }} />
      <h5>{title}</h5>
    </Container>
  );
}

export default SideBarOption;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  :hover {
    opacity: 0.8;
    background-color: var(--slack-black);
  }
`;
