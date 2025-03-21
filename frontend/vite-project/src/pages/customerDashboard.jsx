export default function CustomerDashboard(){
    return(
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    Customer Dashboard
                </h1>
                <p className="text-gray-300 text-center mt-3">
                    Welcome to your personalized dashboard! Manage your orders, track deliveries, and explore exclusive offers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold">🛒 My Orders</h2>
                        <p className="text-gray-400 mt-2">View and manage your recent purchases.</p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold">🚚 Track Delivery</h2>
                        <p className="text-gray-400 mt-2">Check the status of your orders in real-time.</p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold">💳 Payment History</h2>
                        <p className="text-gray-400 mt-2">Review your past transactions and invoices.</p>
                    </div>

                    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                        <h2 className="text-xl font-semibold">🎁 Offers & Rewards</h2>
                        <p className="text-gray-400 mt-2">Unlock special discounts and loyalty rewards.</p>
                    </div>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    Explore More
                </button>
            </div>
        </div>
    )
}