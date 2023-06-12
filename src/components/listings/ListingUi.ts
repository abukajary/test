import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
`;

export const Header = styled.h1`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #262626;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 28px;
  grid-row-gap: 20px;
  padding: 40px 48px 48px;
`;

export const Card = styled.div`
  display: flex;
  padding: 24px 32px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  border-radius: 6px;

  &:hover,
  &:active {
    border: 1px solid #208ad9;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 72px;
    max-height: 72px;
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  min-width: 326px;
  padding: 11px 28px 11px 20px;
  display: grid;
  row-gap: 12px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 20px;
  * {
    cursor: pointer;
  }
`;
