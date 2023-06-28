import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Home(){
    const [article, setArticle] = useState();
    const router = useRouter();
    const {slug} = router.query;

    useEffect(() => {
        if(slug){
            fetch(`https://dev.to/api/articles/whitep4nth3r/${slug}`)
            .then((res) => res.json())
            .then((data) =>{
                setArticle(data)
            })
        }
    }, [slug])

    if (!article) return <div>Loading...</div>;
    
    return(
        <>
        <h1 style={{color:"white"}}>{article.title}</h1>
        <div dangerouslySetInnerHTML={{__html : article.body_html}}/>
        </>
    )
}
