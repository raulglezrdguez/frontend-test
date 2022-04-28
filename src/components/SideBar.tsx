import React from "react";
import styled from "styled-components";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CircleIcon from "@mui/icons-material/Circle";

function SideBar() {
  return (
    <Container>
      <Header>
        <Info>
          <h4>Frontend</h4>
          <UserInfo>
            <CircleIcon color="primary" />
            User name
          </UserInfo>
        </Info>
        <ModeEditIcon />
      </Header>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  flex: 0.25;

  background-color: var(--slack-aubergine);
  color: var(--slack-white);
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Info = styled.div``;
const UserInfo = styled.h5`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
