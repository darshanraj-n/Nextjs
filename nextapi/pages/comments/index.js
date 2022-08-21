import { useState } from 'react'

function CommentsPage() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')   //post

    const fetchcomments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }
//post...........
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data);

    }
//..............post

//delete..................
const deleteComment =async commentid =>{
    const response = await fetch(`/api/comments/${commentid}`,{
        method:'DELETE',
    })
    const data = await response.json()
    console.log(data);
    fetchcomments()
}
//..............delete
    return (
        <>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit comment</button>                      
            <button onClick={fetchcomments}>Load comments</button>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <br />
                        {comment.id} {comment.text}
                        <button onClick={()=> deleteComment(comment.id)}>Delete</button>
                    </div>
                )
            })}
        </>
    )

}
export default CommentsPage