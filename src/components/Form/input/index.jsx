import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({error, label, asside, ...rest}, ref) =>{
    return(
        <div className={`${asside ? styles.inputContainer : styles.inputContainerCenter}`}>
            <label className="headline">{label}</label>
            <input ref={ref} {...rest} />
            {error ? <span className="headline">{error.message}</span> : null}
        </div>
    )
});