import styles from "./SearchBar.module.scss";
import { useState } from "react";
import { isArray } from "@/utils";
import Link from "next/link";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchBarInterface {
  searchPlaceholder?: string;
  categoryData?: any[]
}

const SearchBar = (props: SearchBarInterface) => {
  const { searchPlaceholder, categoryData = [] } = props;

  const [inputValue, setInputValue] = useState("");
  const [isFocus, setIsFocus] = useState(false)

  return (
    
    <div className={styles.search_bar__wrapper}>
      <form>
        <div className={styles.input__wrapper}>
          <input
            className={styles.search_input}
            type="text"
            placeholder={searchPlaceholder}
            autoComplete="false"
            aria-autocomplete="none"
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            onClick={() => setIsFocus(!isFocus)}
            onBlur={() => setIsFocus(false)}
          />
          {
            isFocus && (
              <div className={styles.popup_dialogue}>
                <div className={styles.title}>
                  Categories
                </div>

                <div>
                  {isArray(categoryData) && categoryData.map((item: any, index: number) => (
                    <div className={styles.cat} key={index}>
                      <span>{item.name}</span>
                      <span className={styles.count}>{item.count}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            )
          }
          
          
        </div>
        

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

      
      
      
    </div>
  );
};

export default SearchBar;
