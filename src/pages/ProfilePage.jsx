import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import PhotoCard from '../components/PhotoCard';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

export default function ProfilePage() {
  const posts = [
    {
      author: 'Juan Pérez',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      timeAgo: 'Hace 2 horas',
      content: '¡Nuevo diseño de interfaz terminado! 🎨 ¿Qué opinan?',
      image: 'https://www.w3schools.com/w3images/nature.jpg'
    },
    {
      author: 'Juan Pérez',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      timeAgo: 'Ayer',
      content: 'Feliz de anunciar que me uniré al equipo de diseño de W3Schools como colaborador. 🚀',
      image: null
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Contenedor de página */}
      <div className="w3-container w3-content" style={{maxWidth: '1400px', marginTop: '80px'}}>
        <div className="w3-row">
          {/* Columna izquierda: info de perfil */}
          <div className="w3-col m3">
            <ProfileCard />
            <br />
            <PhotoCard />
          </div>

          {/* Columna central: publicaciones y actividad */}
          <div className="w3-col m7">
            {/* Portada */}
            <div className="w3-card w3-round w3-white w3-margin-bottom">
              <img 
                src="https://www.w3schools.com/w3images/forest.jpg" 
                alt="Portada" 
                style={{width: '100%', maxHeight: '200px', objectFit: 'cover'}}
              />
              <div className="w3-container w3-padding">
                <h3>Juan Pérez <span className="w3-opacity w3-medium">@juanperez</span></h3>
                <p>Diseñador UI/UX. Amante del café y la fotografía. #w3css</p>
              </div>
            </div>

            {/* Crear publicación */}
            <CreatePost />

            {/* Publicaciones */}
            {posts.map((post, index) => (
              <Post 
                key={index}
                author={post.author}
                avatar={post.avatar}
                timeAgo={post.timeAgo}
                content={post.content}
                image={post.image}
              />
            ))}
          </div>

          {/* Columna derecha */}
          <RightSidebar />
        </div>
      </div>

      <br />
      <Footer />
    </>
  );
}
