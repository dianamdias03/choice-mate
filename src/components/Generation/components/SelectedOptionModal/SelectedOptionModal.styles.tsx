import styled, { keyframes } from "styled-components";

const fadeInAndSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 90%;
  max-width: 25rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: ${fadeInAndSlide} 0.4s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ModalHeader = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  text-transform: uppercase;
  padding: 1rem;
`;

export const ModalBody = styled.div`
  font-size: 2rem;
  color: #333333;
  font-weight: 500;
  width: 100%;
  padding: 1rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
`;

export const FooterModal = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const GenerateAgain = styled.div`
  width: 20%;
`;

export const Close = styled.div`
  width: 80%;
`;
