export default function manageSection({ systems }) {
  return (
    <section className="manage">
      <div className="fontmanage">
        <h1>
          Manage your entire community <br />
          in a single system
        </h1>

        <p>Who is Nextcent suitable for?</p>
      </div>

      <div className="cards">
        {systems &&
          systems.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>

                <h1>{item.title}</h1>

                <p>{item.subtitle}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
