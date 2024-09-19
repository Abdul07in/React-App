interface AlertProps {
  children: React.ReactNode;
  visible?: boolean;
  onClose: () => void;
}

const Alert = ({ children, visible, onClose }: AlertProps) => {
  return (
    <div className={`mt-4 alert alert-warning alert-dismissible fade show`}>
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
