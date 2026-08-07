function ProcessCard({ number, icon, title, description }) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">


      <div className="w-14 h-14 mx-auto bg-red-100 rounded-full flex items-center justify-center text-2xl">

        {icon}

      </div>


      <div className="mt-4 text-red-600 font-bold">

        Step {number}

      </div>


      <h3 className="text-xl font-bold text-gray-900 mt-2">

        {title}

      </h3>


      <p className="text-gray-600 mt-3">

        {description}

      </p>


    </div>

  )
}


export default ProcessCard