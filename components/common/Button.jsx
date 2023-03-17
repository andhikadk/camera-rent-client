const Button = ({ toggle, children }) => {
  return (
    <button id='button' onClick={toggle}>
      {children}
    </button>
  );
};

export default Button;
