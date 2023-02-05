import styles from "./LoginForm.module.css"

export default function LoginForm(){
    return (
        <form className={styles.form} action="" method="get">
            <label className={styles.label} 
                    htmlFor="username" >Username
            </label>
            <input className={styles.input} 
                    type="text" 
                    id="username" 
                    name="username" 
                    >
            </input>

            <label className={styles.label} 
                    htmlFor="password" >Password
            </label>
            <input className={styles.input} 
                    type="password" 
                    id="password" 
                    name="password" 
                    >
            </input>

            <button className={styles.submit} type="submit">Submit</button>
        </form>
    );
}