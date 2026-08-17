function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">

      <div className="flex items-start justify-between gap-4">

        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {subtitle}
          </p>
        </div>

        {/* Lucide Icon */}
        <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;