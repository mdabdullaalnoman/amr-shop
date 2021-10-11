import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
    const [product, setProduct] = useState([]);
    const { image } = product;
    console.log(product);
    console.log(image);
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
            <h1 class="sari-colection">Sari Colections</h1>
            <div className="sari-warper">
                {
                    product.map(pd =>



                        <div className="sari-warper">
                            <div className="sari-card">
                                <div className="sari-img">
                                    <img src={pd.image} alt="sari" />
                                    <div className="card-hover-icon">
                                        <Link href="" className="fas fa-shopping-cart nav-link"></Link>
                                        <Link href="" className="fas fa-heart"></Link>
                                        <Link href="" className="fas fa-share"></Link>
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