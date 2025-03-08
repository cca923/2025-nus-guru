import styled from "styled-components";

export const QuizContainer = styled.div`
  padding: 0 100px;
  display: none;
  flex-direction: column;

  &.selected {
    display: flex;
  }
`;

export const QuizTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const QuizText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
