

const Gallery = () => {
    const gallery = [
      "img1.webp",
      "img2.jpg",
      "img3.jpg",
      "img4.jpg",
      "img5.jpg",
      "img6.jpg",
      "img7.jpg",
      "img8.jpg",
      "pricing.jpg"
    ];

    return (
      <section className="gallery">
        <h1>Beats the Best If You Are Excellent</h1>
        <div className="images">
          <div>
            {
              gallery.slice(0, 3).map((element, index) => (
                <img key={index} src={element} alt="" />
              ))
            }
          </div>
          <div>
            {
              gallery.slice(3, 6).map((element, index) => (
                <img key={index} src={element} alt="" />
              ))
            }
          </div>
          <div>
            {
              gallery.slice(6, 9).map((element, index) => (
                <img key={index} src={element} alt="" />
              ))
            }
          </div>
        </div>
      </section>
    );
}

export default Gallery
