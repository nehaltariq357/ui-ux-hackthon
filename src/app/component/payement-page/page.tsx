import React from "react";
import Image from "next/image";

const PaymentPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Form */}
        <section className="col-span-2 bg-white shadow-lg rounded-lg p-8 space-y-8">
          {/* Billing Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Billing Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Address</label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Town / City</label>
                <input
                  type="text"
                  placeholder="Your City"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Rental Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Pick-Up Location</label>
                <input
                  type="text"
                  placeholder="Select your city"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <input
                  type="date"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Time</label>
                <input
                  type="time"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Drop-Off Location</label>
                <input
                  type="text"
                  placeholder="Select your city"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {/* Credit Card */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="credit-card"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="credit-card" className="ml-2 text-gray-600">Credit Card</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Card Number</label>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Expiration Date</label>
                  <input
                    type="month"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">CVC</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* PayPal */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="paypal"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="paypal" className="ml-2 text-gray-600">PayPal</label>
              </div>

              {/* Bitcoin */}
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  id="bitcoin"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="bitcoin" className="ml-2 text-gray-600">Bitcoin</label>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div>
            <h2 className="text-xl font-bold mb-4">Confirmation</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="marketing" className="ml-2 text-gray-600">
                  I agree to receive marketing and reminder emails.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-600"
                />
                <label htmlFor="terms" className="ml-2 text-gray-600">
                  I agree to the terms and conditions and privacy policy.
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section: Rental Summary */}
        <aside className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-xl font-bold">Rental Summary</h2>
          <div className="flex items-center space-x-4">
            <Image
              src="/images/Look.png" 
              alt="Car"
              width={100}
              height={60}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold">Nissan GT-R</h3>
              <p className="text-sm text-gray-500">440+ Reviews</p>
            </div>
          </div>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Apply Promo Code:</span>
              <input
                type="text"
                placeholder="Enter code"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total Rental Price:</span>
            <span>$80.00</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Rent Now
          </button>
        </aside>
      </div>
    </main>
  );
};

export default PaymentPage;
