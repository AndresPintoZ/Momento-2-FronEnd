export default function PhotoCard() {
  const photos = [
    'https://www.w3schools.com/w3images/lights.jpg',
    'https://www.w3schools.com/w3images/nature.jpg',
    'https://www.w3schools.com/w3images/mountains.jpg'
  ];

  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <p><i className="fa fa-camera"></i> Fotos</p>
        <div className="w3-row-padding">
          {photos.map((photo, index) => (
            <div key={index} className="w3-third">
              <img 
                src={photo} 
                alt={`Foto ${index + 1}`}
                style={{width: '100%'}}
                className="w3-margin-bottom"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
