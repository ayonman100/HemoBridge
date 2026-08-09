function DashboardCard({ title, subtitle, children, action }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-6">

      <div className="flex items-center justify-between mb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {action}

      </div>

      {children}

    </section>
  );
}

export default DashboardCard;