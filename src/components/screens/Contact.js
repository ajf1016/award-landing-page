import React from "react";
import styled from "styled-components";
import Background from "../assets/images/Footer - image.png";
import Footer from "./Footer";

function Contact() {
	return (
		<>
			<ContactSecton>
				<ContactWrapper
					style={{ backgroundImage: `url("${Background}")` }}
				>
					<ContactContent>
						<ContactHead>want to get new design news</ContactHead>
						<ContactPara>
							here is an camparison chart of us with thipsum
							tool,but at the end we win
						</ContactPara>
						<ContactForm>
							<FormInput placeholder="your email address" />
							<FormBtn>get started</FormBtn>
						</ContactForm>
					</ContactContent>
				</ContactWrapper>
			</ContactSecton>
			<Footer />
		</>
	);
}

const ContactSecton = styled.section`
	padding: 6% 0;
	text-transform: capitalize;
`;
const ContactWrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	max-width: 1500px;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 70px 40px;
	border-radius: 20px;
`;
const ContactContent = styled.div``;
const ContactHead = styled.h2`
	font-size: 50px;
	width: 70%;
	color: #fff;
	font-family: var(--big-font);
	width: 50%;
`;
const ContactPara = styled.p`
	font-size: 25px;
	color: var(--gray-color);
	width: 45%;
	margin: 30px 0;
`;
const ContactForm = styled.form`
	display: flex;
	width: 30%;
	position: relative;
	align-items: center;
`;
const FormInput = styled.input`
	background: #fff;
	padding: 16px;
	padding-left: 20px;
	font-size: 20px;
	border-radius: 10px;
	width: 100%;
`;
const FormBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background: rgb(175, 80, 160);
	background: linear-gradient(
		335deg,
		rgba(175, 80, 160, 1) 1%,
		rgba(228, 74, 24, 1) 100%,
		rgba(175, 80, 160, 1) 100%
	);
	text-transform: capitalize;
	font-size: 20px;
	color: #fff;
	padding: 19px 29px;
	border-radius: 10px;
	cursor: pointer;
`;

export default Contact;
