import styled from '@emotion/styled';

export const Header = styled.header`
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  & > span {
    display: block;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
  }
`;

export const Button = styled.button`
  margin-bottom: 12px;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
`;
