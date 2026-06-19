import {useRef, useState} from "react";
import styles from "./style.module.css";
import type {UseFormRegister, UseFormSetValue, UseFormWatch} from "react-hook-form";
import SearchIcon from "../../assets/icons/search.svg?react"

type Props = {
  name: string,
  placeholder: string,
  options: string[],
  error: string,
  register: UseFormRegister<any>,
  setValue: UseFormSetValue<any>,
  watch: UseFormWatch<any>,
  customClass?: string
};

export function MySearchSelect({
   name,
   placeholder,
   options,
   register,
   setValue,
   watch,
   customClass,
   error
}: Props) {

  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputValue = watch(name) || '';

  const filteredOptions = options.filter(opt =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  const { ref: registerRef, ...restRegister } = register(name, { required: 'Обязательное поле' });

  const handleSelect = (val: string) => {
    setValue(name, val, { shouldValidate: true });
    inputRef.current?.blur();
    setIsOpen(false);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        {...restRegister}
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${customClass || ''}`}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        autoComplete="off"
        ref={(e) => {
          registerRef(e);
          inputRef.current = e;
        }}
      />
      <div className={styles.searchIconWrapper}>
        <SearchIcon />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredOptions.map((opt) => (
            <li
              key={opt}
              className={styles.dropdownItem}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(opt);
              }}
            >
              <div className={styles.searchOptionIconWrapper}>
               <SearchIcon />
              </div>
              {opt}
            </li>
          ))}
        </ul>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};