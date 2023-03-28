import useInput from '@hooks/useInput';
import { Header, Form, Label, Input, Error, Button, LinkContainer } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const LogIn = () => {
  const { data, error } = useSWR('http://localhost:3095/api/users', fetcher);
  // fetcher함수에 이 주소를 어떻게 처리할지 적어준다.(주소가 fetcher함수의 매개변수로 넘어감)
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [logInError, setLogInError] = useState(false);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post('http://localhost:3095/api/users/login', { email, password })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
          setLogInError(error.response.data);
        });
    },
    [email, password],
  );
  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
