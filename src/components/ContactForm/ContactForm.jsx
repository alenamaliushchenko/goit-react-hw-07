// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { nanoid } from 'nanoid';
// import * as Yup from "yup";
// import css from './ContactForm.module.css';

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

// const initialValues = {
//     name: "",
//     number: ""
// };

// const validationSchema = Yup.object ({
//     name: Yup.string().min(3, "To short!").max(50, "To long!").required("Required"),
//     number: Yup.string().min(3, "To short!").max(50, "To long!").required("Required")
// });
const ContactForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        dispatch(addContact(name, number));
        form.reset();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" required></input>
            <input name="number" placeholder="Number" required></input>
            <button type="submit">Add contact</button>
        </form>
    );
};    

//     return (
//         <Formik
//             initialValues = {initialValues}
//             onSubmit = {handleSubmit}
//             validationSchema = {validationSchema}
//             >
//             <Form className={css.contactForm}>
//                 <label htmlFor={nameFieldId} className={css.contactLabel}>Name</label>
//                 <Field type="text" name="name" id={nameFieldId} className={css.contactInput}></Field>
//                 <ErrorMessage name="name" component="div" className={css.contactError} />

//                 <label htmlFor={numberFieldId} className={css.contactLabel}>Number</label>
//                 <Field type="number" name="number" id={numberFieldId} className={css.contactInput}></Field>
//                 <ErrorMessage name="number" component="div" className={css.contactError} />

//                 <button type="submit" className={css.addContactBtn}>Add contact</button>
//             </Form>
//         </Formik>
//     )
// };

export default ContactForm