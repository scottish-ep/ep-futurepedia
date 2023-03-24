import styles from "./SearchBar.module.scss";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchBarInterface {
  searchPlaceholder?: string;
}

const SearchBar = (props: SearchBarInterface) => {
  const { searchPlaceholder } = props;

  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false)

  return (
    
    <div className={styles.search_bar__wrapper}>
      <form>
        <input
          className={styles.search_input}
          type="text"
          placeholder={searchPlaceholder}
          autoComplete="false"
          aria-autocomplete="none"
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
        />

        <div className={styles.search_btn}>
          {!inputValue ? (
            <button type="submit">
              <SearchIcon />
            </button>
          ) : (
            <button onClick={() => setInputValue("")}>
              <CloseIcon />
            </button>
          )}
        </div>
      </form>

      <div className={styles.popup_dialogue}>
        <div>
          
        </div>
      </div>
      
      
    </div>
  );
};

export default SearchBar;
