import axios from 'axios';
import React, { useState } from 'react'

function AddComment() {
    const [isNameFocused, setNameFocused] = useState(false);
    const [isEmailFocused, setEmailFocused] = useState(false);
    const [isWebsiteFocused, setWebsiteFocused] = useState(false);
    const [isCommentFocused, setCommentFocused] = useState(false);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        website:"",
        comment:"",
    })
    const handleChange=(e)=>{
        setNameFocused(false)
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleCommentPost=(e)=>{
        e.preventDefault();
        const postCommentData={
            data:{
                name:formData?.name,
                email:formData?.email,
                website:formData?.website,
                comment:formData?.comment
            }
        }
        const postCommentDataJson=JSON.stringify(postCommentData)
        const response=axios.post("",postCommentDataJson,{
                "Authorization": 'Bearer 0b5410f80b9fff07383d6f83e5fe43f4b4d502afe45982efc62749c154297165b03bf8b0a87a2a28c8b4e8f360ac843921446d6b8e6c4cfb4382a117b9d82763363e73e01c0fc19d597ebf5e1fde57b760ec1dec4c3aedfa66167e7a86405231e764b8232a7913043eb1673753e697c1a920dde51e7831ce75c4f4ece3d03fb6', // Replace 'YOUR_TOKEN_HERE' with your token
                'Content-Type': 'application/json'
            }
        )
        console.log(response)
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
                <div class='button-container'>
                    <button className='comment-button' type="submit">Post Comment</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment;
