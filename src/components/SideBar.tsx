import React from "react";
import styled from "styled-components";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Add,
  Apps,
  Bookmark,
  Drafts,
  ExpandLess,
  ExpandMore,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@mui/icons-material";

import SideBarOption from "./SideBarOption";

function SideBar() {
  return (
    <Container>
      <Header>
        <Info>
          <h4>Frontend</h4>
          <UserInfo>
            <CircleIcon />
            User name
          </UserInfo>
        </Info>
        <ModeEditIcon />
      </Header>
      <SideBarOption icon={InsertComment} title="Threads" />
      <SideBarOption icon={Inbox} title="Mentions & Reactions" />
      <SideBarOption icon={Drafts} title="Saved items" />
      <SideBarOption icon={Bookmark} title="Channel browser" />
      <SideBarOption icon={PeopleAlt} title="People & user groups" />
      <SideBarOption icon={Apps} title="Apps" />
      <SideBarOption icon={FileCopy} title="File browser" />
      <SideBarOption icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption icon={Add} title="Add Channel" addChannel />
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  flex: 0.25;

  background-color: var(--slack-aubergine);
  color: var(--slack-white);

  > hr {
    border: 1px solid var(--slack-white);
    opacity: 0.6;
    width: 90%;
    margin-left: 5%;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid var(--slack-black);
  border-radius: 0.5rem;
  padding: 1rem;

  > .MuiSvgIcon-root {
    padding: 1rem;
    color: var(--slack-white);
  }
`;

const Info = styled.div``;

const UserInfo = styled.h5`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > .MuiSvgIcon-root {
    padding: 0.1rem;
    color: var(--slack-green);
  }
`;
