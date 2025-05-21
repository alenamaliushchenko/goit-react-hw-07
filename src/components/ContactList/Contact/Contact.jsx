import css from './Contact.module.css';

const formatNumber = (number) => {
  // Прибрати все, крім цифр
  const digits = number.replace(/\D/g, '');
  // Форматування у вигляді XXX-XXX-XXXX
  if (digits.length >= 10) {
    return digits.replace(/(\d{3})(\d{3})(\d{4}).*/, '$1-$2-$3');
  }
  return number; // якщо коротший номер, повернути як є
}

console.log(formatNumber("890.964.9466 x1561")); // 890-964-9466

const Contact = ({ avatar, name, number, onDelete }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.avatarBlock}>
            <img 
              src={avatar || "https://cdn-icons-png.flaticon.com/128/151/151782.png"} 
              alt="Avatar" 
              width="20" 
              height="20" 
              className={css.avatar} 
            />
            <p className={css.contactName}>{name}</p>
          </div>
          <div className={css.phoneBlock}>
            <img 
              src="https://cdn-icons-png.flaticon.com/128/151/151768.png" 
              alt="Phone" 
              width="20" 
              height="20" 
              className={css.phone} 
            />
            <p className={css.contactNumber}>{formatNumber(number)}</p>
          </div>
        </div>

        <div className={css.buttonWrapper}>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
