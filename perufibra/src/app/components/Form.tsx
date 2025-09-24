'use client';
import React, { useState } from 'react';

interface FormProps {
  modal: boolean;
  className: string;
  textLabel: string;
  classNameButton: string;
  placeholderName: string;
  placeholderPhone: string;
  buttonText: string;
  textPolicy: string;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  modal,
  className,
  textLabel,
  classNameButton,
  placeholderName,
  placeholderPhone,
  buttonText,
  textPolicy,
  children
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={`${className} ${modal ? "block" : "hidden"}`}>
      <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{textLabel}</h2>
        <p className="text-lg text-gray-700 mb-4">
          Déjanos tus datos y un asesor especializado se contactará contigo.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder={placeholderName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mb-2 border-2 rounded-lg border-[#ddd] text-base bg-[#f1f1f1] text-[#404848]"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder={placeholderPhone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 mb-2 border-2 rounded-lg border-[#ddd] text-base bg-[#f1f1f1] text-[#404848]"
            />
          </div>

          <p className="text-sm text-gray-500 mb-4">
            *{textPolicy}
          </p>

          <div className="flex items-center justify-start mb-6">
            <input
              type="checkbox"
              checked={acceptedPolicy}
              onChange={() => setAcceptedPolicy(!acceptedPolicy)}
              className="mr-2"
            />
            <span className="text-sm text-gray-500">
              He leído y Aceptado la{" "}
              <span className="font-semibold text-red-600">Política de Privacidad</span>
            </span>
          </div>

          <button
            type="submit"
            disabled={!acceptedPolicy}
            className={classNameButton}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

