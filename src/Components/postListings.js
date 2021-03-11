import React from 'react';
import PostCard from './postCard.js';

const PostList = ({postList}) => {

    return(
        <div className="flex justify-center flex-wrap mx-100 lg:mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:px-4 lg:w-3/6">
                {postList.map((postChild, index) => {
                    return(
                        <PostCard 
                        key={index}
                        postChild={postChild} 
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default PostList;