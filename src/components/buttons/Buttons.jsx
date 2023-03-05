import css from './Buttons.module.scss';
const { buttonTransparent, buttonYellow } = css;
const Button = props => {
  const { children, type } = props;
  console.log(type);

  const styles = type => {
    if (type === 'yellow') {
      return buttonYellow;
    }

    if (type === 'transparent') {
      return buttonTransparent;
    }
    return '';
  };

  return <button className={styles(type)}>{children}</button>;
};

export default Button;
