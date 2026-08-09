function StatCard({ title, value, subtitle, icon, iconBg = "bg-red-50", iconColor = "text-red-600" }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </p>

          {subtitle && (
            <p className="text-sm text-gray-500 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          <span className="text-xl">
            {icon}
          </span>
        </div>

      </div>

    </div>
  );
}

export default StatCard;