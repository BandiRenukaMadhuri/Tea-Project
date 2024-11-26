<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function Store (){
    return (
        <section>
        <h1>Welcome to Our Tea Shop</h1>
        <h2>Explore Our Delicious Tea Varieties</h2>
        <div className="tea-container">
          <div className="tea-card">
            <img src="src/assets/store-product-1.jpg" alt="Green Tea" class="tea-image"/>
            <div className="tea-info">
            <h2>☆☆☆☆</h2>
              <h3>𝔑𝔞𝔱𝔲𝔯𝔞𝔩 𝔠𝔩𝔬𝔰𝔢 𝔱𝔢𝔞</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>₹.250</h2>
              <div className="buttons">
                <button className="more-detail">More Detail ➡</button>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="tea-card">
            <img src="src/assets/store-product-2.jpg" alt="Black Tea" class="tea-image"/>
            <div className="tea-info">
              <h2>☆☆☆☆</h2>
              <h3>𝔊𝔯𝔢𝔢𝔫 𝔗𝔢𝔞 𝔗𝔲𝔩𝔞𝔰</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>₹.250</h2>
              <div className="buttons">
                <button className="more-detail">More Detail ➡</button>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="tea-card">
            <img src="src/assets/store-product-3.jpg" alt="Herbal Tea" class="tea-image"/>
            <div className="tea-info">
            <h2>☆☆☆☆</h2>
              <h3>𝔏𝔫𝔰𝔱𝔞𝔫𝔱 𝔗𝔢𝔞 𝔓𝔯𝔢𝔪𝔦𝔵</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <h2>₹.250</h2>
              <div className="buttons">
                <button className="more-detail">More Detail ➡</button>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}
export default Store;