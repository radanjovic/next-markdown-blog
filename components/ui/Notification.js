import ReactDOM from 'react-dom';
import css from './Notification.module.css';

export default function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = css.success;
  }

  if (status === 'error') {
    statusClasses = css.error;
  }

  const CSS = `${css.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={CSS}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notification'));
}

