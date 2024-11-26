
function products(){
    return(
        <section className="products">
    <div className="products-head">
        <h2>Our Products</h2>
        <h3>𝒯𝑒𝒶 𝒽𝒶𝓈 𝒶 𝒸𝑜𝓂𝓅𝓁𝑒𝓍 𝓅𝑜𝓈𝒾𝓉𝒾𝓋𝑒 𝑒𝒻𝒻𝑒𝒸𝓉 𝑜𝓃 𝓉𝒽𝑒 𝒷𝑜𝒹𝓎</h3>
        <main className="main-section">
        <div className="card-container">
    <div className="card">
      <img src="src/assets/product-4.jpg" alt="Image 1"/>
      <div className="card-info">
        <h3>𝓞𝓻𝓰𝓪𝓷𝓲𝓬 𝓣𝓮𝓪</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, reiciendis..</p>
      </div>
    </div>
    <div className="card">
      <img src="src/assets/product-1.jpg" alt="Image 2"/>
      <div className="card-info">
        <h3>𝓖𝓻𝓮𝓮𝓷 𝓣𝓮𝓪</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quis?.</p>
      </div>
    </div>
    <div className="card">
      <img src="src/assets/product-2.jpg" alt="Image 3"/>
      <div className="card-info">
        <h3>𝓑𝓵𝓪𝓬𝓴 𝓣𝓮𝓪</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, nihil..</p>

      </div>
    </div>
  </div>

            <div className="arrows">
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </main>
    </div>
</section>

    )
}

export default products;