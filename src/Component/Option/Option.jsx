import './Option.css';
export default function Option({ children, onClick, className }) {
  return (
    <div className={`option-item ${className ? className : ''}`} onClick={onClick}>
      {children}
    </div>
  );
}