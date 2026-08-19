function BloodCard({ type, units, status }) {
  const isLowStock = status === "Low Stock";

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between gap-4">

        {/* Blood Type */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
            <span className="text-2xl font-bold text-red-600">
              {type}
            </span>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">
              Blood Type
            </p>

            <p className="text-lg font-semibold text-gray-900">
              {type} Blood
            </p>
          </div>

        </div>

        {/* Units */}
        <div className="text-right">

          <p className="text-3xl font-bold text-gray-900">
            {units}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Units
          </p>

        </div>

      </div>

      {/* Status */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">

        <span className="text-sm text-gray-500">
          Current Status
        </span>

        <span
          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
            isLowStock
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >

          <span
            className={`w-2 h-2 rounded-full ${
              isLowStock
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          />

          {status}

        </span>

      </div>

    </div>
  );
}

export default BloodCard;