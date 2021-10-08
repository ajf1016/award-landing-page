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
`;
const FooterLeft = styled.div`
	width: 38%;
	display: flex;
	flex-direction: column;
`;
const FooterImg = styled.img`
	display: inline-block;
	width: 40%;
	margin-bottom: 15px;
`;
const Span = styled.span`
	font-size: 20px;
	color: var(--gray-color);
	margin-bottom: 10px;
`;
const FooterRight = styled.div`
	width: 62%;
    display: flex;
    align-items: center;
    justify-content: end;
`;
const FooterUl = styled.ul`
    display: flex;
    justify-content: space-between;
    border-right: 1px solid var(--gray-color);
    padding: 20px 0;
`;
const FooterLi = styled.li`
    font-size: 20px;
    margin-right: 50px;
`;
const FooterLink = styled.a`
    color: var(--gray-color);
`;
const FooterDesignLink = styled.a`
    font-size: 20px;
    margin-left: 50px;
    color: var(--gray-color);
`;
const FooterSpan = styled.span`
    color: var(--orange-color);
    margin-left: 10px;
    text-transform: lowercase;
`;

export default Footer;
