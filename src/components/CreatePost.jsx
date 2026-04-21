import { useState } from 'react';

export default function CreatePost({ onPostCreate }) {
  const [postText, setPostText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handlePublish = () => {
    if (postText.trim()) {
      const newPost = {
        author: 'Tú',
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        timeAgo: 'Justo ahora',
        content: postText,
        image: imageUrl || null
      };
      
      if (onPostCreate) {
        onPostCreate(newPost);
      }
      
      setPostText('');
      setImageUrl('');
      alert('¡Publicación creada!');
    } else {
      alert('Por favor escribe algo antes de publicar.');
    }
  };

  return (
    <div className="w3-card w3-round w3-white w3-margin-bottom">
      <div className="w3-container w3-padding">
        <h6 className="w3-opacity"><i className="fa fa-pencil"></i> ¿Qué estás pensando?</h6>
        
        <textarea 
          className="w3-input w3-border w3-round w3-margin-bottom" 
          style={{minHeight: '80px', resize: 'none'}}
          placeholder="Comparte tus pensamientos, fotos o videos..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>

        <input 
          type="text" 
          className="w3-input w3-border w3-round w3-margin-bottom" 
          placeholder="URL de imagen (opcional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button 
          type="button" 
          className="w3-button w3-theme w3-round"
          onClick={handlePublish}
        >
          <i className="fa fa-share-square"></i> Publicar
        </button>
      </div>
    </div>
  );
}
