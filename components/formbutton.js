'use client';

import submitForm from '@/public/functions/contact';

export default function FormButton() {

  function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    submitForm();
  }

  return (
      <button className={"btn btn-primary mb-2"} onClick={handleClick}>Bestätigen</button>
  );
}




