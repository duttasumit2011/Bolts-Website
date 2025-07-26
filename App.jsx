import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bolt-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">Bolt&apos;s Fitness Gym</h1>
          <p className="mt-4 text-xl md:text-2xl">
            Where Strength Meets Style – Unleash Your Inner Beast
          </p>
          <Button className="mt-6 text-lg px-8 py-4">Join the Pack</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-300">
          Welcome to Bolt’s Fitness Gym – named after our energetic Siberian Husky, Bolt! We&apos;re not just another fitness space. We&apos;re a community-driven transformation hub designed for those who crave energy, motivation, and results. From intense cardio sessions to calm recovery zones, Bolt&apos;s is a lifestyle you’ll want to live daily.
        </p>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Strength Training",
            "Fat Burn Bootcamp",
            "Personal Coaching",
            "Cardio & HIIT",
            "Recovery Lounge",
            "Nutrition Counseling",
          ].map((program) => (
            <Card
              key={program}
              className="bg-black text-white border border-gray-800 shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-semibold">{program}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/bolt1.jpg", "/bolt2.jpg", "/gym1.jpg", "/gym2.jpg"].map(
            (src, index) => (
              <img
                key={index}
                src={src}
                alt={`Bolt Gym ${index + 1}`}
                className="rounded-2xl shadow-lg object-cover w-full h-72"
              />
            )
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <div className="flex flex-col items-center space-y-6 text-lg text-gray-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <span>Shop No. 727, Downtown Mall, New Town, Kolkata</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <span>+91-XXXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <span>contact@boltsfitness.in</span>
          </div>
        </div>
        <Button className="mt-8 text-lg px-8 py-4">Get In Touch</Button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500 text-sm">
        © 2025 Bolt’s Fitness Gym. Unleash the Beast. All rights reserved.
      </footer>
    </div>
  );
}