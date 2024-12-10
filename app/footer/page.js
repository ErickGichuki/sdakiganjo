import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h3 className="text-xl font-bold text-white">Seventh-day Adventist Kiganjo Church</h3>
            <address className="not-italic mt-4">
              Njabini road <br />
              Olkalou <br />
              CRVC
            </address>
            <div className="mt-4">
              <p>Phone: <a href="tel:2547" className="hover:text-gray-400">+2547</a></p>
              <p>Email: <a href="mailto:contact@kiganjochurch.org" className="hover:text-gray-400">kiganjo@gamail.com</a></p>
              <p>Website: <a href="https://www.churchname.org" className="hover:text-gray-400">www.kiganjochurch.org</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Regular Service Times</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Saturdays (Sabbaths):</strong>
                <div>8:30 am - Morning Devotion</div>
                <div>9:00 am - Sabbath School</div>
                <div>10:50 am - Divine Worship Service</div>
                <div>12:30 pm - Fellowship Lunch</div>
                <div>2:00 pm - Bible Study</div>
              </li>
              <li>
                <strong>Thursdays:</strong>
                <div>8:00 am - Fellowship Meeting</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="giving" className="hover:text-gray-400">
                  Our Giving
                </a>
              </li>
              <li>
                <a href="prayer-requests" className="hover:text-gray-400">
                  Prayer Requests
                </a>
              </li>
              <li>
                <a href="weekly-bulletin" className="hover:text-gray-400">
                  Weekly Bulletin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; Copyright - Seventh-day Adventist Kiganjo Church. <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
