function ProcessCard({ number, title, description }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Step Number */}
      <div className="flex items-center justify-between mb-6">

        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
          <span className="text-lg font-bold text-red-600">
            {number}
          </span>
        </div>

        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Step {number}
        </span>

      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
}

export default ProcessCard;