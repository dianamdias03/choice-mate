import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 2.4rem;
  font-family: "Lato", "Montserrat", "Arial", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 100%;

  ${({ color }) => colorStyles[color]}

  &:disabled {
    cursor: not-allowed;
    background-color: #b0bec5;
  }

  img {
    width: auto;
    padding: 4px;
    height: 80%;
  }
`;

export const colorStyles = {
  blue: css`
    background-color: #3d5675;
    &:hover:enabled {
      background-color: #000b1f;
    }
  `,
  red: css`
    background-color: #b32d3a;
    &:hover:enabled {
      background-color: #9a2533;
    }
  `,
  blueGray: css`
    background-color: #62727b;
    &:hover:enabled {
      background-color: #4c5b62;
    }
  `,
  gray: css`
    background-color: #2d2d2d;
    &:hover:enabled {
      background-color: #1a1a1a;
    }
  `,
  darkGreen: css`
    background-color: #223f36;
    &:hover:enabled {
      background-color: #1a312a;
    }
  `,
  burntOrange: css`
    background-color: #b55233;
    &:hover:enabled {
      background-color: #934429;
    }
  `,
  darkRose: css`
    background-color: #8b5e64;
    &:hover:enabled {
      background-color: #734b50;
    }
  `,
  sand: css`
    background-color: #c4a287;
    &:hover:enabled {
      background-color: #a8836d;
    }
  `,
};
