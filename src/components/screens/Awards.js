import React from "react";
import appleLogo from "../assets/images/apple.svg";
import googleLogo from "../assets/images/google.svg";
import freepikLogo from "../assets/images/freepik-logo-.svg";
import flaticonLogo from "../assets/images/flaticon.svg";
import line from "../assets/images/cross - line.svg";
import arrow from "../assets/images/arrow.svg";
import styled from "styled-components";
function Awards() {
	return (
		<>
			<AwardSection id="award">
				<AwardWrapper>
					<AwardItemCard>
						<AwardTop>
							<IconImg src={appleLogo} alt="Image" />
							<DateSpan className="color-change">
								18 jun 2020
							</DateSpan>
						</AwardTop>
						<AwardMiddle>
							<PriceSpan className="color-change">
								gold winner
							</PriceSpan>
							<PriceHead>apple design award 2020-21</PriceHead>
							<BorderImg src={line} alt="Image" />
						</AwardMiddle>
						<AwardBottom>
							<CountrySpan>united states</CountrySpan>
							<ArrowImg src={arrow} alt="Image" />
						</AwardBottom>
					</AwardItemCard>
					<AwardItemCard>
						<AwardTop>
							<IconImg src={googleLogo} alt="Image" />
							<DateSpan className="color-change">
								08 mar 2020
							</DateSpan>
						</AwardTop>
						<AwardMiddle>
							<PriceSpan className="color-change">
								runner up
							</PriceSpan>
							<PriceHead>google design award 2020-21</PriceHead>
							<BorderImg src={line} alt="Image" />
						</AwardMiddle>
						<AwardBottom>
							<CountrySpan>india, new delhi</CountrySpan>
							<ArrowImg src={arrow} alt="Image" />
						</AwardBottom>
					</AwardItemCard>
					<AwardItemCard>
						<AwardTop>
							<IconImg src={freepikLogo} alt="Image" />
							<DateSpan className="color-change">
								18 jun 2019
							</DateSpan>
						</AwardTop>
						<AwardMiddle>
							<PriceSpan className="color-change">
								silver award
							</PriceSpan>
							<PriceHead>apple design award 2019-20</PriceHead>
							<BorderImg src={line} alt="Image" />
						</AwardMiddle>
						<AwardBottom>
							<CountrySpan>france</CountrySpan>
							<ArrowImg src={arrow} alt="Image" />
						</AwardBottom>
					</AwardItemCard>
					<AwardItemCard>
						<AwardTop>
							<IconImg src={flaticonLogo} alt="Image" />
							<DateSpan className="color-change">
								24 feb 2020
							</DateSpan>
						</AwardTop>
						<AwardMiddle>
							<PriceSpan className="color-change">
								special jury
							</PriceSpan>
							<PriceHead>flaticon design award 2020-21</PriceHead>
							<BorderImg src={line} alt="Image" />
						</AwardMiddle>
						<AwardBottom>
							<CountrySpan>new york</CountrySpan>
							<ArrowImg src={arrow} alt="Image" />
						</AwardBottom>
					</AwardItemCard>
				</AwardWrapper>
			</AwardSection>
		</>
	);
}

const AwardSection = styled.section`
	padding: 3% 0;
	text-transform: capitalize;
`;
const AwardWrapper = styled.section`
	width: 80%;
	max-width: 1500px;
	margin: 0 auto;
	display: flex;
	align-items: stretch;
	@media all and (max-width: 1280px) {
		flex-wrap: wrap;
	}
`;
const AwardItemCard = styled.div`
	width: 24%;
	padding: 25px;
	display: flex;
	background: #141414;
	flex-direction: column;
	border: 1px solid #fff;
	border-left-color: #e44a18;
	border-top-color: #e44a18;
	border-right-color: #af50a0;
	border-bottom-color: #af50a0;
	border-radius: 8px;
	transition: 0.4s ease-in-out;
	margin-right: 1%;
	&:last-child {
		margin-right: 0;
	}

	&:hover {
		.color-change {
			color: #fff;
		}
		background: rgb(175, 80, 160);
		background: linear-gradient(
			335deg,
			rgba(175, 80, 160, 1) 1%,
			rgba(228, 74, 24, 1) 100%,
			rgba(175, 80, 160, 1) 100%
		);
		transition: all 300ms ease-in-out;
		-webkit-transition: all 300ms ease-in-out;
		-moz-transition: all 300ms ease-in-out;
		-ms-transition: all 300ms ease-in-out;
		-o-transition: all 300ms ease-in-out;
		transform: scaleY(1.1);
	}
	@media all and (max-width: 1440px) {
		margin-right: 3%;
	}
	@media all and (max-width: 1280px) {
		width: 49%;
		margin-right: 2%;
		margin-bottom: 5%;
		&:nth-child(2n) {
			margin-right: 0;
		}
	}
	@media all and (max-width: 640px) {
		width: 100%;
		margin-right: 0;
		margin-bottom: 10%;
	}
	@media all and (max-width: 360px) {
		margin-bottom: 15%;
	}
`;
const AwardTop = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
`;
const IconImg = styled.img`
	display: inline-block;
	width: 18%;
	background-color: #2d2d2d;
	padding: 15px;
	border-radius: 15px;
	@media all and (max-width: 1440px) {
		width: 24%;
		padding: 10px;
	}
	@media all and (max-width: 1280px) {
		width: 14%;
	}
	@media all and (max-width: 480px) {
		width: 20%;
	}
`;
const DateSpan = styled.span`
	font-size: 18px;
	color: ${({ hover }) => (hover ? "#fff" : "var(--gray-color)")};
	@media all and (max-width: 1440px) {
		font-size: 15px;
	}
`;
const AwardMiddle = styled.section`
	margin: 15px 0 30px;
`;
const PriceSpan = styled.span`
	font-size: 18px;
	color: ${({ hover }) => (hover ? "#fff" : "var(--gray-color)")};
`;
const PriceHead = styled.h3`
	font-size: 25px;
	color: #fff;
	font-family: var(--big-font);
	margin: 20px 0 45px;
	@media all and (max-width: 1440px) {
		font-size: 22px;
	}
`;
const BorderImg = styled.img`
	display: inline-block;
	width: 20%;
`;
const AwardBottom = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;
`;
const CountrySpan = styled.span`
	font-size: 18px;
	color: #fff;
	@media all and (max-width: 1440px) {
		font-size: 15px;
	}
`;
const ArrowImg = styled.img`
	display: inline-block;
	width: 18%;
`;

export default Awards;
