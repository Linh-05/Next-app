export default function ClientSection({our}){
return(
          <section className="client">
        <h1 className="fontour">Our Clients</h1>
        <p className="fontour-2">
          {" "}
          We have been working with some Fortune 500+ clients
        </p>
        <div className="client-logos">
          {our && our.map(function (item) {
            return <img key={item.id} src={item.icon} />;
          })}
        </div>
      </section>
)
}