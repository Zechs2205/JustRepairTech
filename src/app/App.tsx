import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../imports/JustRepairTech_Logo.svg';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-4xl w-full mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          {/* Logo Section */}
          <div className="mb-12">
            <img
              src={logo}
              alt="JustRepairTech - Computer Diagnostics & Repair"
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
              <a
                href="https://maps.google.com/?q=7000+McLeod+Rd,+Niagara+Falls,+ON+L2G+7K3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                7000 McLeod Rd, Niagara Falls, ON L2G 7K3
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-lg">
              <Phone className="w-6 h-6 text-blue-600" />
              <a
                href="tel:+12899929592"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                (289) 992-9592
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <a
                href="mailto:justinsayto21@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                justinsayto21@gmail.com
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <a
              href="tel:+12899929592"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}