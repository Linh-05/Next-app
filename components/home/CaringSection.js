export default function CaringSection({caring}){
    return(
        <section className="caring">
        <h1>Caring is the new marketing</h1>

        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>

        <div className="caring-content">
          {caring && caring.map((item) => {
            return (
              <div className="caring-container" key={item.id}>
                <img src={item.icon} alt={item.title} />

                <div className="creating">
                  <h3>{item.title}</h3>

                  <p className="selec">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
}