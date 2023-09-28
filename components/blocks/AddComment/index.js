import axios from 'axios';
import React, { useState } from 'react'
import { postData } from 'utils/data-manager';

function AddComment() {
    const [isNameFocused, setNameFocused] = useState(false);
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isWebsiteFocused, setWebsiteFocused] = useState(false);
    const [isCommentFocused, setCommentFocused] = useState(false);
    const [message,setMessage]=useState({
        message:'',
        added:''
    });

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        website:"",
        comment:"",
    })

    const handleChange=(e)=>{
        setNameFocused(false)
        setMessage('');
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    //Posting Data
    const handleCommentPost=async (e)=>{
        e.preventDefault();
        const postCommentData={
            data:{
                name:formData?.name,
                email:formData?.email,
                comment:formData?.comment,
                website:formData?.website,
            }
        }
        const response=await postData("comments",postCommentData);
        if(response?.status==200){
            setMessage({
                message:"Comment added successfully, Our team will review and publish.",
                added:true,
            })
        }
        if(response?.data?.error){
            setMessage({
                message:response?.data?.error?.message,
                added:false,
            })
        }
    }

    return (
        <div class='comments-section'>
            <h2 className='reply-text'>Leave a Reply</h2>
            <p className='reply-text-des'>Your email address will not be published. Required fields are marked <span className='asterisk'>*</span></p>
            <form class='grid-container' onSubmit={handleCommentPost}>
                <label className='grid-item'>
                    <input 
                        type='text' 
                        className='input-field'
                        name="name" 
                        onFocus={() => setNameFocused(true)} 
                        onBlur={() => setNameFocused(false)}
                        onChange={handleChange}
                        required
                    />
                    {
                        !formData?.name && 
                        <>
                            {!isNameFocused  &&     
                                <span className='placeholder-text'>Name<span className='asterisk'>*</span></span> 
                            }
                        </>
                    }
                </label>
                <label className='grid-item'>
                    <input 
                        type='text' 
                        className='input-field'
                        name="email" 
                        onFocus={() => setEmailFocused(true)} 
                        onBlur={() => setEmailFocused(false)}
                        onChange={handleChange}
                        required
                    />
                    {
                        !formData?.email && 
                        <>
                            {!isEmailFocused  &&     
                                <span className='placeholder-text'>Email<span className='asterisk'>*</span></span> 
                            }
                        </>
                    }
                </label>
                <label className='grid-item'>
                    <input 
                        type='text' 
                        className='input-field'
                        name="website" 
                        onFocus={() => setWebsiteFocused(true)} 
                        onBlur={() => setWebsiteFocused(false)}
                        onChange={handleChange}
                    />
                    {
                        !formData?.website && 
                        <>
                            {!isWebsiteFocused  &&     
                                <span className='placeholder-text'>Website</span> 
                            }
                        </>
                    }
                </label>
                <label className='grid-item1'>
                    <textarea  
                        rows={8} 
                        className='area-field'
                        name="comment" 
                        onFocus={() => setCommentFocused(true)} 
                        onBlur={() => setCommentFocused(false)}
                        onChange={handleChange}
                        required
                    />
                    {
                        !formData?.comment && 
                        <>
                            {!isCommentFocused  &&     
                                <span className='placeholder-area'>Add Comment<span className='asterisk'>*</span></span> 
                            }
                        </>
                    }
                </label>
                <div class='check-box-container'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1" className='check_box_text'>Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                {message?.message &&
                    <div class='check-box-container'>
                        <p style={{color:message.added ? "green":"red"}}>{message?.message}</p>
                    </div>
                }
                <div class='button-container'>
                    <button className='comment-button' type="submit">Post Comment</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment;
