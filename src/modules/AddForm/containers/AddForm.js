import React, { useState, useEffect } from 'react'
import { AddForm } from 'components'
import { connect } from 'react-redux'
import { setTitle, setImageUrl,setCreatedAt, setDescription, setText } from '../actions'
import { withRouter } from 'react-router';

import { postsApi } from 'utils/api';


const AddFormContainer = 
    ({ 
        postId, 
        setTitle,
        setDescription,
        setCreatedAt,
        setImageUrl,
        setText,
        title,
        description,
        imageUrl,
        text,
        status
    }) => { 
    useEffect(() => {
        if(postId){
            postsApi.get(postId).then(({ data }) => {
                setTitle(data.title)
                setDescription(data.description)
                setImageUrl(data.imageUrl)
                setText(data.text)
                setCreatedAt(data.createdAt)
            })
        }
    },[])
    const sendData = (data) => {
        if(status=="create"){
            postsApi.post(data)
        } else {
            postsApi.put(postId, data)
        }
    }
    return (
        <AddForm
            setTitle ={setTitle}
            setDescription ={setDescription}
            setImageUrl ={setImageUrl}
            setText={setText}
            title ={title}
            imageUrl ={imageUrl}
            description ={description}
            text={text}
            sendData={sendData}
            
        />
    )
}

const mapStateToProps = (state, { match }) => ({
    title: state.addPost.title,
    imageUrl: state.addPost.imageUrl,
    description: state.addPost.description,
    text: state.addPost.text,
    postId: match.params.id, 
});

const mapDispatchToProps = {
    setTitle,
    setDescription,
    setImageUrl,
    setText,
};


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(AddFormContainer)
)