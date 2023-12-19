import styles from './AutocompleteSearch.module.css';

function AutocompleteSearch()
{
 return(  
 <div>         
   <input type="text"  placeholder="Search" className={styles.Input}></input>
 </div>
 );
}

export default AutocompleteSearch;