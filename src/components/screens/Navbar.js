import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

function Navbar() {
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
								<NavInnerLink>home</NavInnerLink>
							</NavLinkItem>
							<NavLinkItem>
								<NavInnerLink>about us</NavInnerLink>
							</NavLinkItem>
							<NavLinkItem>
								<NavInnerLink>awards</NavInnerLink>
							</NavLinkItem>
							<NavLinkItem>
								<NavInnerLink>contact us</NavInnerLink>
							</NavLinkItem>
						</NavLinks>
						<NavBtnContainer>
							<NavBtn>get started</NavBtn>
						</NavBtnContainer>
					</NavbarRight>
				</NavbarWrapper>
			</NavbarContainer>
		</>
	);
}

const NavbarContainer = styled.header`
	padding: 0 0 3%;
	text-transform: capitalize;
`;
const NavbarWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NavbarLeft = styled.div`
	width: 50%;
`;
const NavLogo = styled.h1`
	width: 45%;
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
`;
const NavLinks = styled.ul`
	display: flex;
	align-items: center;
`;
const NavInnerLink = styled.a`
	color: var(--gray-color);
    cursor: pointer;
    &:hover{
        color: #fff;
        transition: .2s ease-in-out;
    }
`;
const NavLinkItem = styled.li`
	font-size: 20px;
	margin-right: 50px;
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
		width: 103%;
		height: 107%;
		background: rgb(175, 80, 160);
		background: linear-gradient(
			273deg,
			rgba(175, 80, 160, 1) 1%,
			rgba(228, 74, 24, 1) 100%,
			rgba(175, 80, 160, 1) 100%
		);
		position: absolute;
		top: -2px;
		left: -3px;
		z-index: -1;
		border-radius: 8px;
	}
`;
const NavBtnContainer = styled.div``;

export default Navbar;
