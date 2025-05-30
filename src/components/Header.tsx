import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
   return (
      <header className={styles.header}>
         <h1 className={styles.title}>ToDo приложение</h1>
         <nav>
            <ul className={styles.list}>
               <li className={styles.listItem}>
                  <Link to='/' className={styles.listItemLink}>Главная</Link>
               </li>
               <li className={styles.listItem}>
                  <Link to='/about' className={styles.listItemLink}>О приложении</Link>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;