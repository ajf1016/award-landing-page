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
`;
const HomeWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1500px;
	display: flex;
	padding-top: 150px;
`;
const HomeLeft = styled.div`
	width: 60%;
`;
const HomeHeading = styled.h1`
	font-family: var(--big-font);
	font-size: 55px;
	color: #fff;
	width: 70%;
`;
const HeadingSpan = styled.span`
	color: var(--orange-color);
`;
const HomePara = styled.p`
	font-size: 27px;
	color: var(--gray-color);
	width: 55%;
	margin: 30px 0;
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
`;
const BtnSpan = styled.span`
	font-size: 18px;
	color: #cccccc;
`;
const BtnHead = styled.h3`
	font-size: 22px;
	color: #fff;
`;
const HomeRight = styled.div`
	width: 40%;
	position: relative;
`;
const RightImg = styled.img`
	display: inline-block;
	width: 100%;
	transform: translateY(-40px);
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
`;

export default Home;
