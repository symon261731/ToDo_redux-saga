import React from 'react';
import './Form.scss';

export default function Form() {
  return (
    <div className="form">
      <div className="form__box">
        <h2 className="form__title">Make an appointment</h2>
        <form action="" className="form__my-form">
          <div className="form__content">
            <input placeholder="Name" type="text" className="form__input" />
            <input placeholder="Email" type="email" className="form__input" />
            <input placeholder="PhoneNumber" type="PhoneNumber" className="form__input" />
            <input placeholder="Select Service" type="" className="form__input" />
          </div>
          <div className="form__text-area">
            <textarea placeholder="Tell us about your puppers include his/her name" className="form__text-item" />
          </div>
          <div className="form__replace">
            <button type="submit" className="form__btn">make an appointment</button>
          </div>
        </form>
      </div>
    </div>
  );
}
