import { useState, useCallback } from 'react';

const useFormSubmission = ({ submitFunction, initialValue = {} } = {}) => {
  const [formValues, setFormValues] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [experiencedError, setExperiencedError] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleUpdate = useCallback((event) => {
    const {
      name, value, checked, type,
    } = event.target;
    const isCheckbox = (type === 'checkbox');
    const newFormData = { ...formValues, [name]: isCheckbox ? checked : value };
    setFormValues(newFormData);
  }, [formValues]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setExperiencedError(false);
      setIsSubmitting(true);
      setSubmitResult(null);
      const result = await submitFunction(formValues);
      setIsSubmitting(false);
      setSubmitResult(result);
      return result;
    } catch (err) {
      setExperiencedError(true);
      setIsSubmitting(false);
      setSubmitResult(err);
      return err;
    }
  };

  return {
    handleUpdate,
    formValues,
    handleSubmit,
    isSubmitting,
    experiencedError,
    submitResult,
  };
};

export default useFormSubmission;
