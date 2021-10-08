import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
function Footer() {
	return (
		<>
			<FooterSection>
				<FooterWrapper>
					<FooterLeft>
						<FooterImg src={logo} alt="Image" />
						<Span>apartment 0031 broadmoor ln,</Span>
						<Span>rotonda west wood,</Span>
						<Span>fl,33947</Span>
					</FooterLeft>
					<FooterRight>
						<FooterUl>
							<FooterLi>
								<FooterLink>home</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>about us</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>awards</FooterLink>
							</FooterLi>
							<FooterLi>
								<FooterLink>contact us</FooterLink>
							</FooterLi>
						</FooterUl>
						<FooterDesignLink>
							designed by<FooterSpan>www.steyp.in</FooterSpan>
						</FooterDesignLink>
					</FooterRight>
				</FooterWrapper>
			</FooterSection>
		</>
	);
}

const FooterSection = styled.section`
	padding: 3% 0;
	text-transform: capitalize;
`;
const FooterWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	max-width: 1500px;
	margin: 0 auto;
    @media all and (max-width: 1280px) {
		flex-direction: column;
	}
`;
const FooterLeft = styled.div`
	width: 38%;
	display: flex;
	flex-direction: column;
    @media all and (max-width: 1280px) {
		width: 100%;
        text-align: center;
	}
`;
const FooterImg = styled.img`
	display: inline-block;
	width: 40%;
	margin-bottom: 15px;
    @media all and (max-width: 1280px) {
		width: 30%;
        margin: 0 auto;
        margin-bottom: 50px;
	}
    @media all and (max-width: 640px) {
		width: 50%;
	}
`;
const Span = styled.span`
	font-size: 20px;
	color: var(--gray-color);
	margin-bottom: 10px;
    @media all and (max-width: 1440px) {
		font-size: 15px;
		
	}
    @media all and (max-width: 1280px) {
		font-size: 20px;
	}
    @media all and (max-width: 768px) {
		font-size: 16px;
	}
`;
const FooterRight = styled.div`
	width: 62%;
	display: flex;
	align-items: center;
	justify-content: end;
    @media all and (max-width: 1280px) {
		width: 100%;
        justify-content: center;
        margin-top: 50px;
	}
    @media all and (max-width: 640px) {
		flex-direction: column;
	}
    @media all and (max-width: 640px) {
		text-align: center;
	}
`;
const FooterUl = styled.ul`
	display: flex;
	justify-content: space-between;
	border-right: 1px solid var(--gray-color);
	padding: 20px 0;
    @media all and (max-width: 640px) {
		border-bottom: 1px solid var(--gray-color);
        border-right: none;
        margin-bottom: 20px;
	}
    
`;
const FooterLi = styled.li`
	font-size: 20px;
	margin-right: 50px;
	@media all and (max-width: 1440px) {
		font-size: 15px;
		margin-right: 20px;
	}
    @media all and (max-width: 1280px) {
		font-size: 20px;
        margin-right: 30px;
	}
    @media all and (max-width: 980px) {
		font-size: 18px;
        margin-right: 20px;
	}
    @media all and (max-width: 768px) {
		font-size: 13px;
        margin-right: 10px;
	}
    @media all and (max-width: 640px) {
		font-size: 16px;
	}
    @media all and (max-width: 480px) {
		font-size: 14px;
	}
    @media all and (max-width: 360px) {
		font-size: 12px;
	}
`;
const FooterLink = styled.a`
	color: var(--gray-color);
`;
const FooterDesignLink = styled.a`
	font-size: 20px;
	margin-left: 50px;
	color: var(--gray-color);
	@media all and (max-width: 1440px) {
		font-size: 15px;
		margin-left: 20px;
	}
    @media all and (max-width: 640px) {
        margin-left: 0;
	}
    @media all and (max-width: 360px) {
		font-size: 13px;
	}
`;
const FooterSpan = styled.span`
	color: var(--orange-color);
	margin-left: 10px;
	text-transform: lowercase;
    @media all and (max-width: 640px) {
		margin-left: 10px;
	}
`;

export default Footer;
