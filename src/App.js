import Heading from "./components/Heading"
import Paragraph from "./components/Paragraph"
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <GlobalStyle>
      <div style={{padding: '0 32px'}}>
      <Heading />
      <Paragraph />
    </div>
    <div className="d-flex">
      <div>Item ABC</div>
      <div>Item DEF</div>
    </div>
    </GlobalStyle>
  )
}

export default App