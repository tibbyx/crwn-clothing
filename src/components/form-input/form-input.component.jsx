import './form-input.style.scss';

const FormInput = ({ label, ...ohterProbs }) => {
  return (
    <div className="group">
      <input className="form-input" {...ohterProbs} />
      {label && (
        <label
          className={`${
            ohterProbs.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
