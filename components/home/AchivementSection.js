export default function achivementSection({ achievement }) {
  return (
    <section className="achievement">
      <div className="starts">
        <div className="left">
          <h1>
            Helping a local <br />
            <span>business reinvent itself</span>
          </h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="right">
          {achievement &&
            achievement.map((item) => {
              return (
                <div className="icon-achi" key={item.id}>
                  <img src={item.icon} alt="" />

                  <div className="oneside">
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
