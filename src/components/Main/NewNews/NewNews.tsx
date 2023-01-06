import styles from "./NewNews.module.css";

interface Props {
    readonly header: string;
    readonly paragraph: string;
}

export const NewNews: React.FunctionComponent<Props> = props => {
    const { header, paragraph } = props;
    return (
        <div className={styles["new-news"]}>
            <a href="#">{header}</a>
            <p>{paragraph}</p>
        </div>
    );
};
