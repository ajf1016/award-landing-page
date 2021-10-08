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
    @media all and (max-width : 980px){
        background-position-x: -250px;
    }
    @media all and (max-width : 640px){
        padding: 60px 25px;
    }
    @media all and (max-width : 360px){
        padding: 50px 18px;
    }
`;
const ContactContent = styled.div``;
const ContactHead = styled.h2`
	font-size: 50px;
	width: 70%;
	color: #fff;
	font-family: var(--big-font);
	width: 50%;
    @media all and (max-width : 1280px){
        width: 100%;
    }
    @media all and (max-width : 1050px){
        font-size: 45px;
    }
    @media all and (max-width : 980px){
        font-size: 40px;
    }
    @media all and (max-width : 768px){
        font-size: 30px;
    }
    @media all and (max-width : 640px){
        font-size: 23px;
    }
`;
const ContactPara = styled.p`
	font-size: 25px;
	color: var(--gray-color);
	width: 45%;
	margin: 30px 0;
    @media all and (max-width : 1280px){
        width: 95%;
    }
    @media all and (max-width : 1050px){
        font-size: 22px;
        width: 90%;
    }
    @media all and (max-width : 980px){
        font-size: 20px;
    }
    @media all and (max-width : 768px){
        font-size: 18px;
    }
    @media all and (max-width : 640px){
        font-size: 15px;
    }
    @media all and (max-width : 640px){
        width: 100%;
    }
`;
const ContactForm = styled.form`
	display: flex;
	width: 30%;
	position: relative;
	align-items: center;
    @media all and (max-width : 1440px){
        width: 50%;
    }
    @media all and (max-width : 1050px){
        width: 60%;
    }
    @media all and (max-width : 980px){
        width: 70%;
    }
    @media all and (max-width : 768px){
        width: 90%;
    }
    @media all and (max-width : 640px){
        width: 100%;
    }
`;
const FormInput = styled.input`
	background: #fff;
	padding: 16px;
	padding-left: 20px;
	font-size: 20px;
	border-radius: 10px;
	width: 100%;
    @media all and (max-width : 1050px){
        font-size: 18px;
    }
    @media all and (max-width : 768px){
        font-size: 16px;
    }
    @media all and (max-width : 640px){
        padding: 12px;
        border-radius: 8px;
    }
    @media all and (max-width : 640px){
        width: 100%;
    }
    @media all and (max-width : 640px){
        padding: 10px;
        font-size: 14px;
    }
    @media all and (max-width : 360px){
        font-size: 13px;
    }
    
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
    @media all and (max-width : 1050px){
        font-size: 18px;
    }
    @media all and (max-width : 768px){
        font-size: 16px;
    }
    @media all and (max-width : 640px){
        padding: 15px;
        border-radius: 8px;
    }
    @media all and (max-width : 640px){
        padding: 12px;
        font-size: 14px;
    }
    @media all and (max-width : 360px){
        padding: 12px 5px;
    }
`;

export default Contact;
