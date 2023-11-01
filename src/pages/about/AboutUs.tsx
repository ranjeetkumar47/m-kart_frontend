import React from 'react'
import { Helmet } from 'react-helmet'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-6">
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://source.unsplash.com/random/800x600" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-lg text-gray-600">
              At OurShop, we're passionate about providing the best online shopping experience for our customers. Our journey started with a simple
              idea - to make shopping convenient, affordable, and enjoyable. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
              massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam
              nisl ac turpis.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Meet Our Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <img src="https://source.unsplash.com/random/400x400" alt="CEO - John Doe" className="w-48 h-48 rounded-full shadow-lg" />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">John Doe</h3>
                <p className="text-gray-600">CEO</p>
              </div>

              <div>
                <img
                  src="https://source.unsplash.com/random/400x400"
                  alt="Marketing Head - Jane Smith"
                  className="w-48 h-48 rounded-full shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">Jane Smith</h3>
                <p className="text-gray-600">Marketing Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
