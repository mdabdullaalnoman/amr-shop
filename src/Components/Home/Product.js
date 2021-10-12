import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })

            .catch(err => console.log(err))
    }, []);

    return (
        <section>
            <h1 className="sari-colection">Products</h1>
            <div className="sari-warper">
                {
                    !product.length
                    ?
                    <div style={{textAlign:'center' , fontSize:'16px'}}>
                        <iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="100" height="100" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p>Loading...</p> 
                    </div>
                    :   
                    product.map(pd =>
                        <div className="sari-warper" key={pd.description}>
                            <div className="sari-card">
                                <div className="sari-img">
                                    <img src={pd.image} alt="sari" />
                                    <div className="card-hover-icon">
                                        <Link to="/home" className="fas fa-shopping-cart nav-link"></Link>
                                        <Link to="/home" className="fas fa-heart"></Link>
                                        <Link to="/home" className="fas fa-share"></Link>
                                    </div>
                                </div>
                                <div className="sari-content">
                                    <p className="sari-tittle">{pd.description} </p>
                                    <h1>$ {pd.price}</h1>
                                    <p className="avilable">{pd.category}</p>
                                    <div className="card-footer">
                                        <div className="star-icons">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p>bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </section>
    );
};

export default Product;