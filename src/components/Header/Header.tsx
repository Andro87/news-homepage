import styles from "./Header.module.css";

interface Props {
    readonly onOpenMenu: () => void;
    readonly isMenuOpen: boolean;
}

export const Header: React.FunctionComponent<Props> = props => {
    const { onOpenMenu, isMenuOpen } = props;

    return (
        <header className={styles.header}>
            <img src="./images/logo.svg" alt="logo" />

            <button
                type="button"
                title="menu"
                className={styles["btn-menu"]}
                onClick={() => onOpenMenu()}
            >
                {!isMenuOpen ? (
                    <svg
                        width="40"
                        height="17"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#00001A" fillRule="evenodd">
                            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
                            <path d="M0 0h40v3H0z" />
                        </g>
                    </svg>
                ) : (
                    <svg
                        width="32"
                        height="31"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#00001A" fillRule="evenodd">
                            <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                            <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
                        </g>
                    </svg>
                )}
            </button>

            <nav
                className={`${styles.navigation} ${
                    isMenuOpen && styles["navigation-menu"]
                }`}
            >
                <ul className={styles["nav-list"]}>
                    <li className={styles["nav-item"]}>
                        <a href="*" className={styles["nav-link"]}>
                            home
                        </a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="*" className={styles["nav-link"]}>
                            new
                        </a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="*" className={styles["nav-link"]}>
                            popular
                        </a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="*" className={styles["nav-link"]}>
                            trending
                        </a>
                    </li>
                    <li className={styles["nav-item"]}>
                        <a href="*" className={styles["nav-link"]}>
                            categories
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
