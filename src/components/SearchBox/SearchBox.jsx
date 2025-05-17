import css from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {

    return (
        <div className={css.searchBox}>
            <label htmlFor="searchInput" className={css.searchTitle}>Find contacts by name</label>
            <input 
                type="text" 
                id="searchInput"
                value={value}
                onChange = {(e) => onChange(e.target.value)}
                className={css.searchInput}
            />
        </div>
    );
};
export default SearchBox