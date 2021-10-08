import React from "react";
import styled from "styled-components";
function Sidebar() {
	return (
		<>
			<SidebarContainer>
				<SideLinks>
					<SideLinkItem>
						<SideInnerLink>home</SideInnerLink>
					</SideLinkItem>
					<SideLinkItem>
						<SideInnerLink>about us</SideInnerLink>
					</SideLinkItem>
					<SideLinkItem>
						<SideInnerLink>awards</SideInnerLink>
					</SideLinkItem>
					<SideLinkItem>
						<SideInnerLink>contact us</SideInnerLink>
					</SideLinkItem>
				</SideLinks>
				<SideBtn>get started</SideBtn>
			</SidebarContainer>
		</>
	);
}

const SidebarContainer = styled.div`
	height: 100vh;
	text-transform: capitalize;
	background: rgb(175, 80, 160);
	background: linear-gradient(
		335deg,
		rgba(175, 80, 160, 1) 1%,
		rgba(228, 74, 24, 1) 100%,
		rgba(175, 80, 160, 1) 100%
	);
    padding: 50px;
`;
const SideLinks = styled.div``;
const SideLinkItem = styled.div``;
const SideInnerLink = styled.div``;
const SideBtn = styled.div``;

export default Sidebar;
