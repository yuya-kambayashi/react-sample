import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  //  const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  const onClickGeneraSample1 = () => {
    setUserInfo({ isAdmin: false });
    history.push("/sample1");
  };

  const onClickGeneraSample2 = () => {
    setUserInfo({ isAdmin: false });
    history.push("/sample2");
  };
  return (
    <SContainer>
      <h2>TOP</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneraSample1}>サンプル１</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneraSample2}>サンプル２</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
