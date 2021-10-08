import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import spotImg from "../assets/images/spot - image.svg";
import blurImg from "../assets/images/pattern - color.png";

function Home() {
	return (
		<>
			<HomeSection>
				<Navbar />
				<HomeWrapper>
					<HomeLeft>
						<HomeHeading>
							2021 global design
							<HeadingSpan> awards</HeadingSpan> published
						</HomeHeading>
						<HomePara>
							here we published global design awards for the
							design compatitions
						</HomePara>
						<HomeBtnBox>
							<BtnSpan>already impressed!</BtnSpan>
							<BtnHead>get started today?</BtnHead>
						</HomeBtnBox>
					</HomeLeft>
					<HomeRight>
						<RightImg src={spotImg} alt="Image" />
						<BlurImgOne src={blurImg} alt="Image" />
						<BlurImgTwo src={blurImg} alt="Image" />
					</HomeRight>
				</HomeWrapper>
			</HomeSection>
		</>
	);
}

const HomeSection = styled.section`
	padding: 2% 0 4%;
	text-transform: capitalize;
	height: 100vh;
	@media all and (max-width: 1050px) {
		height: 100%;
	}
	@media all and (max-width: 1050px) {
		padding-bottom: 15%;
	}
`;
const HomeWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1500px;
	display: flex;
	padding-top: 150px;
	@media all and (max-width: 1050px) {
		flex-direction: column;
	}
`;
const HomeLeft = styled.div`
	width: 60%;
	@media all and (max-width: 1050px) {
		width: 100%;
	}
    @media all and (max-width: 768px) {
		margin-bottom: 100px;
	}
`;
const HomeHeading = styled.h1`
	font-family: var(--big-font);
	font-size: 55px;
	color: #fff;
	width: 70%;
	@media all and (max-width: 1440px) {
		width: 90%;
	}
	@media all and (max-width: 1440px) {
		width: 100%;
		font-size: 45px;
	}
	@media all and (max-width: 1050px) {
		width: 90%;
		font-size: 55px;
	}
	@media all and (max-width: 768px) {
		width: 100%;
		font-size: 50px;
	}
    @media all and (max-width: 640px) {
		font-size: 35px;
	}
    @media all and (max-width: 480px) {
		font-size: 29px;
	}
    @media all and (max-width: 360px) {
		font-size: 25px;
	}
`;
const HeadingSpan = styled.span`
	color: var(--orange-color);
`;
const HomePara = styled.p`
	font-size: 27px;
	color: var(--gray-color);
	width: 55%;
	margin: 30px 0;
	@media all and (max-width: 1440px) {
		width: 95%;
	}
	@media all and (max-width: 1440px) {
		width: 100%;
		font-size: 23px;
	}
    @media all and (max-width: 640px) {
		font-size: 20px;
	}
    @media all and (max-width: 480px) {
		font-size: 18px;
	}
    @media all and (max-width: 360px) {
		font-size: 16px;
	}
`;
const HomeBtnBox = styled.div`
	background: rgb(175, 80, 160);
	background: linear-gradient(
		273deg,
		rgba(175, 80, 160, 1) 1%,
		rgba(228, 74, 24, 1) 100%,
		rgba(175, 80, 160, 1) 100%
	);
	display: inline-block;
	border-radius: 10px;
	padding: 18px 34px;
	@media all and (max-width: 1440px) {
		padding: 12px 30px;
	}
    @media all and (max-width: 640px) {
		padding: 12px 22px;
	}
    @media all and (max-width: 480px) {
		padding: 10px 18px;
	}
`;
const BtnSpan = styled.span`
	font-size: 18px;
	color: #cccccc;
    @media all and (max-width: 640px) {
		font-size: 16px;
	}
    @media all and (max-width: 480px) {
		font-size: 15px;
	}
    @media all and (max-width: 360px) {
		font-size: 14px;
	}
`;
const BtnHead = styled.h3`
	font-size: 22px;
	color: #fff;
	@media all and (max-width: 1440px) {
		font-size: 20px;
	}
    @media all and (max-width: 640px) {
		font-size: 20px;
	}
    @media all and (max-width: 480px) {
		font-size: 16px;
	}
    @media all and (max-width: 360px) {
		font-size: 15px;
	}
`;
const HomeRight = styled.div`
	width: 40%;
	position: relative;
	@media all and (max-width: 1050px) {
		width: 100%;
	}
`;
const RightImg = styled.img`
	display: inline-block;
	width: 100%;
	transform: translateY(-40px);
	@media all and (max-width: 1050px) {
		transform: translateX(10%);
	}
`;
const BlurImgOne = styled.img`
	position: absolute;
	top: 52%;
	left: -18%;
	-webkit-filter: blur(75px);
	-webkit-filter: blur(75px);
	filter: blur(75px);
	display: inline-block;
	width: 45%;
	z-index: -1;
	@media all and (max-width: 1440px) {
		top: 55%;
		left: -11%;
		width: 35%;
	}
	@media all and (max-width: 1050px) {
		transform: translateX(10%);
		top: 65%;
		left: -8%;
		width: 35%;
	}
`;
const BlurImgTwo = styled.img`
	position: absolute;
	bottom: 52%;
	left: 40%;
	-webkit-filter: blur(75px);
	-webkit-filter: blur(75px);
	filter: blur(75px);
	display: inline-block;
	width: 45%;
	z-index: -1;
	@media all and (max-width: 1440px) {
		bottom: 57%;
		left: 50%;
		width: 35%;
	}
	@media all and (max-width: 1050px) {
		bottom: 50%;
		left: 60%;
		width: 40%;
	}
`;

export default Home;
