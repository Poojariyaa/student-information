import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import myPhoto from './"C:\Users\pooja\OneDrive\Documents\react-project\student-information\public\pooja_stu.jpg"'; // Ensure to place the photo in the src folder

const animateBackground = keyframes`
  0% { background-color: cyan; }
  50% { background-color: lightblue; }
  100% { background-color: cyan; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: cyan;
  animation: ${animateBackground} 10s infinite;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const InfoBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const StudentInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <Photo src={myPhoto} alt="Profile" />
      <InfoBox>
        <h2>Name: John Doe</h2>
        <p>Registration No: 123456</p>
        {isVisible && <p>Additional student information goes here.</p>}
        <Button onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </Button>
      </InfoBox>
    </Container>
  );
};

export default StudentInfo;
