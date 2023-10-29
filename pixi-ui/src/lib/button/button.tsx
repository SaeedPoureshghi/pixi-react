import styles from './button.module.css';
import { IButton,ButtonTypes } from './types';

type pxButton = Partial<IButton>;


export function Button(props: pxButton) {
  return (
    <>
    <button>{props.title ?? 'BUTTON'}</button>
    </>
  );
}

export default Button;
