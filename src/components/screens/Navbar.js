import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";

function Navbar({ toggle }) {
	return (
		<>
			<NavbarContainer>
				<NavbarWrapper>
					<NavbarLeft>
						<NavLogo>
							<NavLogoLink>
								<NavLogoImg src={logo} />
							</NavLogoLink>
						</NavLogo>
					</NavbarLeft>
					<NavbarRight>
						<NavLinks>
							<NavLinkItem>
								<NavInnerLink
									to="home"
									spy={true}
									smooth={true}
									duration={500}
								>
									home
								</NavInnerLink>
							</NavLinkItem>
							<NavLinkItem>
								<NavInnerLink
									to="about"
									spy={true}
									smooth={true}
									duration={500}
								>
									about us
								</NavInnerLink>
							</NavLinkItem>
							<NavLinkItem>
								<NavInnerLink
									to="award"
									spy={true}
									smooth={true}
									duration={500}
								>
									awards
								</NavInnerLink>
							</NavLinkItem>
							<NavLinkItem>
								<NavInnerLink
									to="contact"
									spy={true}
									smooth={true}
									duration={500}
								>
									contact us
								</NavInnerLink>
							</NavLinkItem>
						</NavLinks>
						<NavBtn>get started</NavBtn>
					</NavbarRight>
					<IconContainer onClick={toggle}>
						<RiMenu3Line />
					</IconContainer>
				</NavbarWrapper>
			</NavbarContainer>
		</>
	);
}

const IconContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 0;
	color: #fff;
	font-size: 40px;
	color: #af50a0;
	cursor: pointer;
	display: none;
	@media all and (max-width: 980px) {
		display: block;
	}
	@media all and (max-width: 480px) {
		font-size: 30px;
	}
	@media all and (max-width: 360px) {
		font-size: 30px;
		top: 0;
	}
`;
const NavbarContainer = styled.header`
	padding: 0 0 3%;
	text-transform: capitalize;

	@media all and (max-width: 1050px) {
		padding-top: 2%;
	}
	@media all and (max-width: 640px) {
		padding-top: 6%;
	}
`;
const NavbarWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;
const NavbarLeft = styled.div`
	width: 35%;
	@media all and (max-width: 980px) {
		width: 50%;
	}
`;
const NavLogo = styled.h1`
	width: 45%;
	@media all and (max-width: 1440px) {
		width: 70%;
	}
	@media all and (max-width: 980px) {
		width: 80%;
	}
	@media all and (max-width: 768px) {
		width: 100%;
	}
`;
const NavLogoLink = styled.a`
	display: inline-block;
	width: 100%;
`;
const NavLogoImg = styled.img`
	display: inline-block;
	width: 100%;
`;
const NavbarRight = styled.div`
	display: flex;
	width: 50%;
	@media all and (max-width: 1440px) {
		width: 75%;
		justify-content: end;
	}
	@media all and (max-width: 980px) {
		display: none;
	}
`;
const NavLinks = styled.ul`
	display: flex;
	align-items: center;
`;
const NavInnerLink = styled(Link)`
	color: var(--gray-color);
	cursor: pointer;
	&:hover {
		color: #fff;
		transition: 0.2s ease-in-out;
	}
`;
const NavLinkItem = styled.li`
	font-size: 20px;
	margin-right: 50px;

	@media all and (max-width: 1440px) {
		margin-right: 30px;
	}
	@media all and (max-width: 1280px) {
		font-size: 18px;
		margin-right: 20px;
	}
	@media all and (max-width: 1050px) {
		font-size: 16px;
		margin-right: 15px;
	}
`;
const NavBtn = styled.button`
	padding: 14px 24px;
	text-transform: capitalize;
	font-size: 23px;
	color: var(--orange-color);
	position: relative;
	background: #141414;
	border-radius: 8px;
	margin-left: 30px;
	&::after {
		content: "";
		display: block;
		width: 170px;
		height: 61px;
		background: rgb(175, 80, 160);
		background: linear-gradient(
			273deg,
			rgba(175, 80, 160, 1) 1%,
			rgba(228, 74, 24, 1) 100%,
			rgba(175, 80, 160, 1) 100%
		);
		position: absolute;
		top: -3px;
		left: -2px;
		z-index: -1;
		border-radius: 9px;
		@media all and (max-width: 1280px) {
			width: 126px;
			height: 55px;
			top: -2px;
		}
		@media all and (max-width: 1050px) {
			height: 50px;
		}
	}
	@media all and (max-width: 1280px) {
		font-size: 18px;
		margin-left: 25px;
		padding: 15px;
	}
	@media all and (max-width: 1050px) {
		margin-left: 10px;
		padding: 13px 15px;
	}
`;

export default Navbar;
