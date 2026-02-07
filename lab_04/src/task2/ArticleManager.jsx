import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

export default function ArticleManager() {
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    function onClickAdd() {
        if (!title || !summary) return;

        setArticles([
            ...articles,
            { id: Date.now(), title, summary }
        ]);

        setTitle('');
        setSummary('');
    }

    function onClickRemove(id) {
        setArticles(articles.filter(a => a.id !== id));
    }

    return (
        <>
            <AddArticle
                name="Articles"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeSummary={(e) => setSummary(e.target.value)}
                onClickAdd={onClickAdd}
            />

            <ArticleList
                articles={articles}
                onClickRemove={onClickRemove}
            />
        </>
    );
}