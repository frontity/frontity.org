import { connect, Head, useConnect } from "frontity";

import { Packages } from "../../types";

const CookieYes = () => {
  const { state } = useConnect<Packages>();
  return state.cookieyes.id ? (
    <Head>
      <script
        id="cookieyes"
        type="text/javascript"
        src={`https://cdn-cookieyes.com/client_data/${state.cookieyes.id}.js`}
      ></script>
    </Head>
  ) : null;
};

export default connect(CookieYes);
