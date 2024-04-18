import theme from "@/styles/theme";
import styled from "styled-components";

export const Modal = styled.div`
  background-color: ${theme.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 450px;
  height: 100vh;
  z-index: 2;
  box-shadow: -5px 0px 6px 0px #00000021;
`;

export const Content = styled.div`
  width: 85%;
  padding: 10px;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const CloseModal = styled.div`
  border-radius: 50%;
  padding: 10px 14px;
  background-color: ${theme.colors.black};
  cursor: pointer;
`;


export const ListProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;