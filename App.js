import { css, html } from 'react-strict-dom';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Failed prop type'])

const styles = css.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1
  },
  h1: { padding: 10 },
  button: {
    borderRadius: 20,
    backgroundColor: '#700fad',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonText: { 
    color: 'white',
    fontWeight: 'bold'
  }
});

export default function App() {
  return (
    <html.div style={styles.container}>
      <html.h1 style={styles.h1}>Hello World</html.h1>
      <html.button
        style={styles.button}
        onClick={() => alert('Hello World')}
      >
        <html.p
          style={styles.buttonText}
        >
          Click me
        </html.p>
      </html.button>
    </html.div>
  );
}
