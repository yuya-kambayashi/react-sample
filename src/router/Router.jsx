import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { Sample1 } from "../components/pages/Sample1";
import { Sample2 } from "../components/pages/Sample2";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
      </Switch>
      <Switch>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
        <Route path="/sample1">
          <HeaderOnly>
            <Sample1 />
          </HeaderOnly>
        </Route>
        <Route path="/sample2">
          <HeaderOnly>
            <Sample2 />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
