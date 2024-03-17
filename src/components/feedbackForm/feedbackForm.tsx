import { BaseSyntheticEvent } from 'react';
import './feedbackForm.css';

import { useForm } from 'react-hook-form';
import InputField from './inputField/inputField';
import { Item, FormValues, SubmitFunctionType } from '../../type/feedbackFormType';
import ErrorMessage from './errorMessage/errorMessge';
import { newCilientMessage } from '../../../db/operations';

const submit: SubmitFunctionType = async (data: FormValues, e: BaseSyntheticEvent | undefined) => {
  const newItem: Item = {
    id: 1,
    name: data.name,
    email: data.email,
    phone: data.phone,
    theme: data.theme,
    message: data.message,
    agree: data.agree,
  };
  e?.target.reset();
  newCilientMessage(newItem);
};

const FeedbackForm = ({ submitAction = submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      noValidate
      className="feedback-form"
      onSubmit={handleSubmit(submitAction)}
      data-testid="form"
    >
      <InputField
        labelProp="Имя"
        type="text"
        placeholder="Имя"
        refProp={register('name', {
          required: 'Имя должно быть заполнено',
        })}
        error={errors.name}
      />
      <div className="feedback-form_short-field">
        <InputField
          labelProp="Email"
          type="text"
          placeholder="Email"
          refProp={register('email', {
            required: 'Email должно быть заполнено',
            //eslint-disable-next-line
            pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Неверное поле email' },
          })}
          error={errors.email}
        />
        <InputField
          labelProp="Phone"
          type="text"
          placeholder="Phone"
          refProp={register('phone', {
            required: 'Phone должно быть заполнено',
            pattern: {
              //eslint-disable-next-line
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: 'Неверное поле phone',
            },
          })}
          error={errors.phone}
        />
      </div>
      <InputField
        labelProp="Тема"
        type="text"
        placeholder="Тема"
        refProp={register('theme', {
          required: 'Тема должна быть заполнено',
        })}
        error={errors.theme}
      />
      <fieldset className="feedback-form_fieldset">
        <label>
          Сообщение
          <textarea
            placeholder="Сообщение"
            rows={5}
            className="feedback-form_textarea"
            {...register('message', {
              required: 'Сообщение должно быть заполнено',
            })}
            data-testid="message"
          />
        </label>
        {errors.message && <ErrorMessage errorMessage={errors.message.message} />}
      </fieldset>
      <fieldset data-testid="agree" className="feedback-form_fieldset feedback-form_agree-field">
        <input
          type="checkbox"
          value="agree"
          {...register('agree', { required: 'Необходимо согласие для отправки' })}
          className="feedback-form_agree"
        />
        <label htmlFor="agree">
          Нажимая кнопку «Отправить сообщение», я даю свое
          <a href="" className="agree-personal-data">
            {' '}
            согласие на обработку моих персональных данных
          </a>
          {errors.agree && <ErrorMessage errorMessage={errors.agree.message} />}
        </label>
      </fieldset>
      <button
        className="feedback-form_submit"
        value="Отправить сообщение"
        type="submit"
        data-testid="sendButton"
      ></button>
    </form>
  );
};

export default FeedbackForm;
