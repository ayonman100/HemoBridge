function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Hospitals Connected",
    },
    {
      number: "10,000+",
      title: "Blood Units Tracked",
    },
    {
      number: "24/7",
      title: "Emergency Support",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-red-600">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`text-center px-6 py-6 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-red-400"
                  : ""
              }`}
            >

              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {item.number}
              </h2>

              <p className="mt-3 text-base md:text-lg text-red-100 font-medium">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;