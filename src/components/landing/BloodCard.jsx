function BloodCard({ type, units, status }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">

      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-3xl font-bold text-red-600">
            {type}
          </h3>

          <p className="text-gray-500 mt-2">
            Available Units
          </p>

        </div>


        <div className="text-right">

          <p className="text-2xl font-bold text-gray-900">
            {units}
          </p>

          <span className="text-green-600 text-sm font-semibold">
            {status}
          </span>

        </div>

      </div>

    </div>
  )
}

export default BloodCard