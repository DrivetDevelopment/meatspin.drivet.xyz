import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Meatspin</title>
      <Component {...pageProps} />
      <footer style={{ position: 'absolute', bottom: '10px' }}>this is made as a joke, please dont take it seriously :D</footer>
    </>
  )
}

export default MyApp
