import Navbar from "../components/landing/Navbar"
import BloodCard from "../components/landing/BloodCard"
import Stats from "../components/landing/Stats"
import ProcessCard from "../components/landing/ProcessCard"


function Home() {
  return (
    <div>
      
        <h1>Hello HemoBridge</h1>

      <Navbar />


      {/* Hero Section */}
      <section className="min-h-screen bg-gray-50 flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">


          {/* Text Side */}
          <div className="flex flex-col justify-center">

            <p className="text-red-600 font-semibold mb-4">
               Emergency Blood Access Platform
            </p>


            <h1 className="text-5xl font-bold text-gray-900 leading-tight">

              Connecting Blood.

              <span className="text-red-600">
                {" "}Saving Lives.
              </span>

            </h1>


            <p className="mt-6 text-lg text-gray-600">

              HemoBridge connects hospitals and blood banks through a
              real-time network, helping medical teams find compatible
              blood faster during emergencies.

            </p>


            <div className="mt-8 flex gap-4">


              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">

                Find Blood Now

              </button>


              <button className="border border-gray-300 px-6 py-3 rounded-lg">

                Learn More

              </button>


            </div>


          </div>



          {/* Blood Visual */}
          <div className="flex items-center justify-center">

            <div className="w-80 h-80 bg-red-100 rounded-full flex items-center justify-center">

              <div className="text-8xl">
                🩸
              </div>

            </div>

          </div>


        </div>

      </section>



      {/* Blood Availability Section */}
      <section className="py-20 bg-white">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-4xl font-bold text-gray-900 text-center">

            Live Blood Availability

          </h2>


          <p className="text-center text-gray-600 mt-3">

            Real-time blood inventory from verified hospitals and blood banks

          </p>



          <div className="grid md:grid-cols-4 gap-6 mt-10">


            <BloodCard
              type="O+"
              units="24"
              status="Available"
            />


            <BloodCard
              type="A+"
              units="12"
              status="Available"
            />


            <BloodCard
              type="B-"
              units="5"
              status="Low Stock"
            />


            <BloodCard
              type="AB+"
              units="8"
              status="Available"
            />


          </div>


        </div>


      </section>



      {/* Statistics */}
      <Stats />

     <section className="py-20 bg-gray-50">


<div className="max-w-7xl mx-auto px-6">


<h2 className="text-4xl font-bold text-gray-900 text-center">

How HemoBridge Works

</h2>


<p className="text-center text-gray-600 mt-3">

From emergency request to blood delivery in minutes

</p>



<div className="grid md:grid-cols-4 gap-6 mt-12">


<ProcessCard

number="1"


title="Emergency Request"

description="Doctor submits blood requirements during a critical situation."

/>



<ProcessCard

number="2"


title="Blood Matching"

description="HemoBridge searches verified inventory for compatible blood."

/>



<ProcessCard

number="3"


title="Blood Bank Connection"

description="The nearest available blood source receives the request."

/>



<ProcessCard

number="4"


title="Fast Delivery"

description="Blood reaches the hospital quickly for the patient."

/>



</div>


</div>


</section>


    </div>
  )
}


export default Home