import Theme from "../components/Theme";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
