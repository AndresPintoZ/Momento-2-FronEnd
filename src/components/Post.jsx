import { useState } from 'react';

export default function Post({ id, author, avatar, timeAgo, content, image }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState([ // Initial comments with unique IDs
    { id: 101, author: 'Usuario 1', text: 'Excelente post!' },
    { id: 102, author: 'Usuario 2', text: '¡Muy interesante!' }
  ]);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = { id: Date.now(), author: 'Tú', text: commentText };
      setComments([...comments, newComment]);
      setCommentText('');
      setShowReplyInput(false);
    }
  };

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img 
        src={avatar} 
        alt="Avatar" 
        className="w3-left w3-circle w3-margin-right" 
        style={{width: '60px'}}
      />
      <span className="w3-right w3-opacity">{timeAgo}</span>
      <h4>{author}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{content}</p>
      {image && (
        <img 
          src={image} 
          alt="Post content"
          style={{width: '100%'}}
          className="w3-margin-bottom"
        />
      )}
      
      {/* Contador de likes */}
      <p className="w3-small w3-text-grey w3-margin-bottom">
        <span className="w3-margin-right"><i className="fa fa-thumbs-up w3-text-indigo"></i> {likes} likes</span>
        <span><i className="fa fa-share w3-text-indigo"></i> {shares} compartidos</span>
      </p>

      {/* Botones de interacción */}
      <div className="w3-margin-bottom">
        <button 
          type="button" 
          className={`w3-button w3-margin-right ${liked ? 'w3-blue' : 'w3-theme-d1'}`}
          onClick={handleLike}
        >
          <i className="fa fa-thumbs-up"></i> {liked ? 'Ya no me gusta' : 'Me gusta'}
        </button>
        <button
          type="button"
          className="w3-button w3-margin-right w3-theme-d2"
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          <i className="fa fa-reply"></i> Responder
        </button>
        <button
          type="button"
          className="w3-button w3-margin-right w3-theme-d2"
          onClick={() => setShowComments(!showComments)} // Toggle comments visibility
        >
          <i className="fa fa-comment"></i> Comentarios ({comments.length})
        </button>
      </div>

      {/* Sección de comentarios */}
      {showComments && (
        <div className="w3-border-top w3-padding-top-16">
          {/* Comentarios existentes */}
          <div className="w3-margin-bottom w3-animate-opacity">
            {comments.map((comment, index) => (
              <div key={index} className="w3-padding-small w3-light-grey w3-round w3-margin-bottom">
                <strong>{comment.author}:</strong> {comment.text}
              </div>
            ))}
          </div>

          {/* Input para agregar comentario */}
          {(showReplyInput || showComments) && (
            <div className="w3-row w3-animate-opacity w3-margin-top">
              <div className="w3-col" style={{ width: '85%' }}>
                <input
                  type="text"
                  className="w3-input w3-border w3-round"
                  placeholder="Escribe un comentario..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleAddComment();
                  }}
                />
              </div>
              <div className="w3-col" style={{ width: '15%', paddingLeft: '10px' }}>
                <button
                  type="button"
                  className="w3-button w3-theme w3-round w3-block"
                  onClick={handleAddComment}
                >
                  <i className="fa fa-send"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        className="w3-button w3-theme-d2 w3-margin-top"
        onClick={handleShare}
      >
        <i className="fa fa-share-alt"></i> Compartir
      </button>
    </div>
  );
}
