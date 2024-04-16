import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';

interface NavbarProps  {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
    </div>
  );
};

