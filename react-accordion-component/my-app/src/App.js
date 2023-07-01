import './App.css';
import Accordion from './Accordion';

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    text: `The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser. It is often assisted
          by technologies such as Cascading Style Sheets (CSS) and scripting languages
          such as JavaScript.`,
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    text: `Cascading Style Sheets (CSS) is a style sheet language used for describing
          the presentation of a document written in a markup language such as HTML or XML
          (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone
          technology of the World Wide Web, alongside HTML and JavaScript.`,
  },
  {
    id: 3,
    title: 'JavaScript',
    text: `JavaScript, often abbreviated as JS, is a programming language that is one of
          the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022,
          98% of websites use JavaScript on the client side for webpage behavior, often
          incorporating third-party libraries. All major web browsers have a dedicated
          JavaScript engine to execute the code on devices.`,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion content={topics} />
      </header>
    </div>
  );
}

export default App;
