import React, { Component } from "react";
import styled, { css } from 'styled-components';

// Styled components for the card
const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

class ProfileCard extends Component {
  render() {
    return (
      <CardContainer>
        <CardImage src={this.props.avatar} alt={this.props.name} />
        <CardContent>
          <CardTitle>{this.props.name}</CardTitle>
          <CardDescription>NIM: {this.props.nim}</CardDescription>
          <CardDescription>Email: {this.props.email}</CardDescription>
          <StyledButton onClick={this.props.handleButtonClick}>GitHub Profile</StyledButton>
        </CardContent>
      </CardContainer>
    );
  }
}

export default class Profile extends Component {
  render() {
    return (
      <div className="User-info">
        <ProfileCard
          name="Fatih Rizqy Hakim"
          nim="21120120140170"
          email="fatihrizqy@students.undip.ac.id"
          avatar="https://avatars.githubusercontent.com/u/82704769?s=400&u=f366e5b05711d7a8d703f4f580010d58a4ed3f6c&v=4"
          handleButtonClick={() => window.open("https://github.com/fatihrizqy", "_blank")}
        />
        <ProfileCard
          name="Daniel Ritz"
          nim="21120120120021"
          email="danielritz@students.undip.ac.id"
          avatar="https://avatars.githubusercontent.com/u/82661762?v=4"
          handleButtonClick={() => window.open("https://github.com/d4r1tz", "_blank")}
        />
        <ProfileCard
          name="Raung Kawijayan"
          nim="21120120140155"
          email="raungkawijayan@students.undip.ac.id"
          avatar="https://avatars.githubusercontent.com/u/116015058?v=4"
          handleButtonClick={() => window.open("https://github.com/ung010", "_blank")}
        />
      </div>
    );
  }
}
