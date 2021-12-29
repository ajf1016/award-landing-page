import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
function Sidebar({ isOpen, toggle }) {
	return (
		<>
			<SidebarContainer isOpen={isOpen}>
				<SidebarWrapper>
					<IconContainer onClick={toggle}>
						<AiOutlineClose />
					</IconContainer>
					<SideLinks>
						<SideLinkItem>
							<SideInnerLink
								to="home"
								spy={true}
								smooth={true}
								duration={500}
								onClick={toggle}
							>
								home
							</SideInnerLink>
						</SideLinkItem>
						<SideLinkItem>
							<SideInnerLink
								to="about"
								spy={true}
								smooth={true}
								duration={500}
								onClick={toggle}
							>
								about us
							</SideInnerLink>
						</SideLinkItem>
						<SideLinkItem>
							<SideInnerLink
								to="award"
								spy={true}
								smooth={true}
								duration={500}
								onClick={toggle}
							>
								awards
							</SideInnerLink>
						</SideLinkItem>
						<SideLinkItem>
							<SideInnerLink
								to="contact"
								spy={true}
								smooth={true}
								duration={500}
								onClick={toggle}
							>
								contact us
							</SideInnerLink>
						</SideLinkItem>
					</SideLinks>
					<SideBtn>get started</SideBtn>
				</SidebarWrapper>
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
	position: fixed;
	z-index: 10;
	width: 100%;
	top: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
	left: 0;
	display: none;
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	transition: all 0.3s ease-in-out;
	@media all and (max-width: 980px) {
		display: block;
	}
`;
const SidebarWrapper = styled.div`
	position: relative;
	text-align: center;
`;
const SideLinks = styled.ul`
	width: 100%;
	text-align: center;
	padding-top: 100px;
`;
const SideLinkItem = styled.li`
	font-size: 50px;
	color: #fff;
	margin-bottom: 50px;
	@media all and (max-width: 480px) {
		font-size: 30px;
	}
`;
const SideInnerLink = styled(Link)`
	cursor: pointer;
`;
const SideBtn = styled.button`
	padding: 15px 30px;
	font-size: 30px;
	border: 2px solid #fff;
	border-radius: 10px;
	display: inline-block;
	color: var(--rose-color);
	background: #fff;
	transition: all 0.2s ease-in;

	&:hover {
		background: transparent;
		color: #fff;
		transition: all 0.2s ease-in;
	}
	@media all and (max-width: 480px) {
		font-size: 20px;
	}
`;

const IconContainer = styled.div`
	position: absolute;
	top: 0px;
	right: 50px;
	font-size: 50px;
	color: #fff;
	@media all and (max-width: 480px) {
		font-size: 35px;
		right: 0;
	}
`;

export default Sidebar;
