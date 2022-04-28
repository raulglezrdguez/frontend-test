import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <HeaderLayout>
      <HeaderAvatar />
      <HeaderCenter>
        <AccessTimeIcon />
        <HeaderSearch>
          <input type="text" placeholder="search" />
          <SearchIcon />
        </HeaderSearch>
      </HeaderCenter>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderLayout>
  );
}

export default Header;

const HeaderLayout = styled.div`
  background-color: var(--slack-aubergine);
  color: var(--slack-white);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0.3rem 0;
  width: 100%;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const HeaderCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderSearch = styled.div`
  background-color: var(--slack-black);
  border-radius: 0.5rem;
  border: 1px solid var(--slack-white);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin-left: 1rem;
  padding: 0.3rem;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    color: var(--slack-white);
    outline: 0;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
