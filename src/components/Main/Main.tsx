import styles from "./Main.module.css";

import { newNews } from "../../data/new-news-data";
import { otherNews } from "../../data/other-news-data";

import { NewNews, OtherNews } from "./index";

export const Main = () => {
    const allNewNews = newNews.map((news, index) => (
        <NewNews key={index} header={news.header} paragraph={news.paragraph} />
    ));

    const allOtherNews = otherNews.map((news, index) => (
        <OtherNews
            key={index}
            order={news.order}
            imageUrl={news.imadeUrl}
            header={news.header}
            paragraph={news.paragraph}
        />
    ));

    return (
        <main className={styles.main}>
            <div className={styles["main-news-img"]}>
                <picture>
                    <source
                        srcSet="/images/image-web-3-desktop.jpg"
                        media="(min-width:1000px)"
                    ></source>
                    <img src="/images/image-web-3-mobile.jpg" alt="" />
                </picture>
            </div>
            <h1 className={styles["main-header"]}>
                The Bright Future of Web 3.0?
            </h1>
            <div className={styles["main-news-wrap"]}>
                <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </p>
                <a href="#" className={styles["btn-more"]}>
                    read more
                </a>
            </div>

            <div className={styles["main-new-news"]}>
                <h2>New</h2>

                <div className={styles["new-news-container"]}>{allNewNews}</div>
            </div>
            <div className={styles["main-other-news"]}>{allOtherNews}</div>
        </main>
    );
};
