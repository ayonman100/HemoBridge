function Stats() {

  const stats = [
    {
      number: "500+",
      title: "Hospitals Connected"
    },
    {
      number: "10,000+",
      title: "Blood Units Tracked"
    },
    {
      number: "24/7",
      title: "Emergency Support"
    }
  ]


  return (

    <section className="py-16 bg-red-600">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {stats.map((item,index)=>(

          <div 
          key={index}
          className="text-center text-white">

            <h2 className="text-5xl font-bold">
              {item.number}
            </h2>

            <p className="mt-3 text-lg">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}


export default Stats