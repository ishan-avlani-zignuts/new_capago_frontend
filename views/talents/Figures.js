import React from 'react'

const Figures = ({data}) => {
  return (
    <section>
      <div className="container" style={{ padding: 0, maxWidth:"1360px" }}>
        <div className="group_figures">
          <h2>Les chiffres du groupe :</h2>
          <div className="figures-cards">
            {data.map((item, index) => (
              <div key={index} className="group-fig-card">
                <div className="figute-title">
                  <img src={item.image} alt="user icon" />
                  <p className="card-title">{item.title}</p>
                </div>
                <div className="figur-count">
                  <h2 className="count-no">{item.count}</h2>
                  <p className="count-pera">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Figures