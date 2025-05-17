import css from './Contact.module.css'

const Contact = ({avatar, id, name, phone, number, onDelete}) => {
    const handleClick = () => {
        onDelete(id);  
    };

    return (
        <div className = {css.contactItem}>
             <div className={css.wrapper}>
                <div className={css.info}>
                    <div className={css.avatarBlock}>
                        <img src={avatar} alt="Avatar" width="20" height="20" className={css.avatar}/>
                        <p className = {css.contactName}>{name}</p>
                    </div>
                    <div className={css.phoneBlock}>
                        <img src={phone} alt="Phone" width="20" height="20" className={css.phone}/>
                        <p className = {css.contactNumber}>{number}</p>
                    </div>
                </div>    
           
                <div className={css.buttonWrapper}>
                    <button onClick={handleClick}>Delete</button> 
                </div>
            </div>   
        </div>    
    );
};      
export default Contact