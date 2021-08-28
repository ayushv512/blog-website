import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { PostDetailContainerWrapper } from './style';

const PostDetailComponent = props => {
    const history = useHistory();
    
    useEffect(() => {
        window.scrollTo(0,0);
        const slug = history.location.pathname.split('/')[2];
        props.postDetailGetAction(slug);

    },[])

    const PostDetailContainer = ()=> {
        const { author:{ name, avatar_URL: avatarUrl }, date, title , content, featured_image: imgSrc} = props.postDetail;

        return (
            <PostDetailContainerWrapper>
                 <img src={imgSrc} height="500" className="featured-image"/> 
                 <div className="post-description">
                    <div className="title">{title}</div>
                    <div className="author-details">
                        <img className="avatar"src={avatarUrl} /> 
                        <div className="name-date">
                            <span className="name">{name}</span>
                            <span className="date">{ formatDate(date)}</span>
                        </div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
                 </div>
             </PostDetailContainerWrapper>
        )
    }

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        return formattedDate.toDateString();
    }

    
    return (
        props.postDetail ?  <PostDetailContainer /> : null
    )
}

export default PostDetailComponent;