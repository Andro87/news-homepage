import styles from "./OtherNews.module.css";

interface Props {
    readonly order: string;
    readonly imageUrl: string;
    readonly header: string;
    readonly paragraph: string;
}

export const OtherNews: React.FunctionComponent<Props> = props => {
    const { order, imageUrl, header, paragraph } = props;
    return (
        <div className={styles["other-news"]}>
            <img src={`/images/${imageUrl}`} alt="" />
            <div className={styles["new-news"]}>
                <span>{order}</span>
                <a href="#">{header}</a>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};
