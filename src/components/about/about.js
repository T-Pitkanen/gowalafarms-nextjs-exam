'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

const About = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles?category=about')
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <div key={article._id}>
                    <h2>{article.title}</h2>
                    <Image src={article.imagePath} alt={article.title} width={500} height={300} />
                    <p>{article.body}</p>
                    <ul>
                        {article.checklist.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default About;