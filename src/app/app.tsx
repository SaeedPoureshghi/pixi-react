// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, ButtonTypes, Card } from '@saeedalone/pixi-ui';
import styles from './app.module.css';



export function App() {
  return (
    <div>
      <Card title='Header'/>
      <Button type={ButtonTypes.danger} title='OK'/>
    </div>
  );
}

export default App;
