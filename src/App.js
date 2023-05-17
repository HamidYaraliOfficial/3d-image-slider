import './App.scss';
import React, { useState } from 'react';

function App() {
    const [angle, setAngle] = useState(0);

    const handleNextClick = () => {
        setAngle(angle - 45);
    };

    const handleBackClick = () => {
        setAngle(angle + 45);
    };

    return (
        <div className="carousel">
            <div className="carousel__cards" style={{ transform: `translateZ(-25rem) rotateY(${angle}deg)` }}>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
                <div className="carousel__card">
                    <img className="carousel__img" src="https://images.unsplash.com/photo-1605490673244-4cf57e52c8ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400" alt="oops!!" />
                </div>
            </div>
            <div className="carousel__control">
                <button className="carousel__btn carousel__btn--back" onClick={handleBackClick}>Back</button>
                <button className="carousel__btn carousel__btn--next" onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}


export default App;