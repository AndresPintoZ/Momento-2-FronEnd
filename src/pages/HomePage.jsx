import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import Footer from '../components/Footer';

export default function HomePage() {
  const posts = [
    {
      author: 'María González',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png',
      timeAgo: 'Hace 30 min',
      content: '¡Acabo de terminar mi nuevo portafolio! 🎉 Chequenlo y déjenme sus comentarios',
      image: 'https://www.w3schools.com/w3images/lights.jpg'
    },
    {
      author: 'Carlos López',
      avatar: 'https://www.w3schools.com/w3images/avatar6.png',
      timeAgo: 'Hace 1 hora',
      content: 'Excelente día para aprender React. ¿Quién más está en el viaje? 👨‍💻',
      image: null
    },
    {
      author: 'Ana Martínez',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      timeAgo: 'Hace 2 horas',
      content: 'La vista desde la oficina hoy está increíble 🌅',
      image: 'https://www.w3schools.com/w3images/forest.jpg'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="w3-container w3-content" style={{maxWidth: '800px', marginTop: '100px'}}>
        <div className="w3-center w3-padding-32">
          <h1>Bienvenido a RedSocial</h1>
          <p className="w3-opacity">Comparte tus momentos con amigos y la comunidad</p>
        </div>

        <CreatePost />

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
      <br />
      <Footer />
    </>
  );
}
