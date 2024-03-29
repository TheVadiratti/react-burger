import { ReactNode, FormEvent } from 'react';
import styles from './PageWithForm.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

type THint = {
  text: string;
  link: string;
  route: string;
};

type TProps = {
  heading: string;
  buttonText: string;
  hints: THint[];
  children: ReactNode;
  submitFunc: (e: FormEvent) => void;
};

function PageWithForm({ heading, buttonText, hints, children, submitFunc }: TProps) {
  function renderHints() {
    return hints.map((hint, i) => {
      if (hints.length - 1 === i) {
        return (
          <p key={i} className={`text text_type_main-default text_color_inactive ${styles.text}`}>{hint.text}<Link to={hint.route} className={styles.link}>{hint.link}</Link></p>
        )
      }
      else {
        return (
          <p key={i} className={`text text_type_main-default text_color_inactive mb-4 ${styles.text}`}>{hint.text}<Link to={hint.route} className={styles.link}>{hint.link}</Link></p>
        )
      }
    })
  }

  return (
    <main className={styles.main}>
      <div className={styles.formCnt}>
        <h2 className={`text text_type_main-medium mb-6 ${styles.heading}`}>{heading}</h2>
        <form className={`mb-20 ${styles.form}`} onSubmit={submitFunc}>
          {children}
          <Button type="primary" size="medium" htmlType='submit'>{buttonText}</Button>
        </form>
        {renderHints()}
      </div>
    </main>
  )
}

export default PageWithForm;