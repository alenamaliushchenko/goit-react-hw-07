import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css'


const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name)

    const handleChange = event => {
        dispatch(changeFilter(event.target.value));
    };
    return (
        <div className={css.searchBox}>
            <label htmlFor="searchInput" className={css.searchTitle}>
                Find contacts by name
            </label>
            <input 
                type="text"
                id="searchInput"
                value={filter}
                placeholder="Search contacts"
                onChange={handleChange} 
                className={css.searchInput}
            />

        </div>
    );
};
// const SearchBox = ({ value, onChange }) => {

//     return (
//         <div className={css.searchBox}>
//             <label htmlFor="searchInput" className={css.searchTitle}>Find contacts by name</label>
//             <input 
//                 type="text" 
//                 id="searchInput"
//                 value={value}
//                 onChange = {(e) => onChange(e.target.value)}
//                 className={css.searchInput}
//             />
//         </div>
//     );
// };
export default SearchBox