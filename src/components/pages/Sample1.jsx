import {useEffect} from 'react';
import { useLocation } from "react-router-dom";


import styled from "styled-components";

export const Sample1 = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `Sample2`;
    window.gtagPageview(location.pathname);

    // change description and rich result for SEO.
    // ...
  }, [location.pathname]);

  console.log(location);
  
  useEffect(() => {
    // page遷移後のスクロール復元
    window.scrollTo(0, 0);
  });

  return (
      <h2>Sample1</h2>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
