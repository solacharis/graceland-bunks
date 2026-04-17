import React, { useState } from "react";

export default function GracelandBunksWebsite() {
  const business = {
    name: "Graceland Bunks",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wgARCADwAPADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAIDBAEFBgf/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABp6WVp6RY6cfr8bK9vLff8Aaz4P2wGMqRNY1YyuUXn9XLw3t3rG9ft8vb9ujifblz5eJ4/d5s/0H9ivYnkM1uDqV9Kp6kI4tbLtXsiwxfGfE2fsvN1n2r1/v1+P4+f0+d5vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMjt5bMryvZ6PXsZ5Vt7h8lP7L+f2X9rj5vS8H7HZ9dk63p8rG6fJ9vG7mV35fp+zzw+L6fr8P1eyZ+X1uD7nq6m+nyy1+J9T6vM7bX0vX5fP5+f0M7qIbb17fV9h3Pq+r7PrfW7Pk9mYyD0L7z7R5/Scv6fR+/0+H1+3zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABn7D7L1vT6vr+L7Pt+f3uP2mPj9Jn5vP7fR+z1+Xy+L5/X5n2fR6X1fS+v7PqvQ8XqfW7fF9n3PH1PKz8fm9Pq9fj8Pl9vj9Pt+v6fS7vS9H2vV+v1vP6vX5+X2nL0vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbP2H2Xren1fX8X2fb8/vcfuMfN6TPzef2+j9nr8vl8Xz+vzPs+j0vq+l9f2fVeh4vU+t2+L7PuePqeVn4/N6fV6/H4fL7fH6fb9f0+l3el6Pter9freX1evz8vtOXpeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANn7D7L1vT6vr+L7Pt+f3uP2mPj9Jn5vP7fR+z1+Xy+L5/X5n2fR6X1fS+v7PqvQ8XqfW7fF9n3PH1PKz8fm9Pq9fj8Pl9vj9Pt+v6fS7vS9H2vV+v1vP6vX5+X2nL0vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbP2H2Xren1fX8X2fb8/vcfuMfN6TPzef2+j9nr8vl8Xz+vzPs+j0vq+l9f2fVeh4vU+t2+L7PuePqeVn4/N6fV6/H4fL7fH6fb9f0+l3el6Pter9freX1evz8vtOXpeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANn7D7L1vT6vr+L7Pt+f3uP2mPj9Jn5vP7fR+z1+Xy+L5/X5n2fR6X1fS+v7PqvQ8XqfW7fF9n3PH1PKz8fm9Pq9fj8Pl9vj9Pt+v6fS7vS9H2vV+v1vP6vX5+X2nL0vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbP2H2Xren1fX8X2fb8/vcfuMfN6TPzef2+j9nr8vl8Xz+vzPs+j0vq+l9f2fVeh4vU+t2+L7PuePqeVn4/N6fV6/H4fL7fH6fb9f0+l3el6Pter9freX1evz8vtOXpeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANn7D7L1vT6vr+L7Pt+f3uP2mPj9Jn5vP7fR+z1+Xy+L5/X5n2fR6X1fS+v7PqvQ8XqfW7fF9n3PH1PKz8fm9Pq9fj8Pl9vj9Pt+v6fS7vS9H2vV+v1vP6vX5+X2nL0vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbP2H2Xren1fX8X2fb8/vcfuMfN6TPzef2+j9nr8vl8Xz+vzPs+j0vq+l9f2fVeh4vU+t2+L7PuePqeVn4/N6fV6/H4fL7fH6fb9f0+l3el6Pter9freX1evz8vtOXpeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANn7D7L1vT6vr+L7Pt+f3uP2mPj9Jn5vP7fR+z1+Xy+L5/X5n2fR6X1fS+v7PqvQ8XqfW7fF9n3PH1PKz8fm9Pq9fj8Pl9vj9Pt+v6fS7vS9H2vV+v1vP6vX5+X2nL0vQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
    tagline: "Premium comfort with a stylish stay.",
    phone: "+91 7005640194",
    email: "stay@gracelandbunks.com",
    address: "Near Aizawl Municipal Corporation, Aizawl, Mizoram",
    mapsLink:
      "https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2fsearch%2fGraceland%2bBunks,%2bnear%2bAizawl%2bMunicipal%2bCorporation,%2bAizawl,%2bMizoram%2f%4023.7441639,92.7381991,991.95731054a,1877.17938218d,35y,0h,0t,0r%2fdata%3dCrMBGoQBEn4KJTB4Mzc0ZGViMDAyYzIxYmI0MzoweDc2NDZmNzYzOWRhMzk2NTUZI119hoG-N0Ah8htwpz4vV0AqQ0dyYWNlbGFuZCBCdW5rcywgbmVhciBBaXphd2wgTXVuaWNpcGFsIENvcnBvcmF0aW9uLCBBaXphd2wsIE1pem9yYW0YAiABIiYKJAnz2JSXnbk3QBHY9qajzLc3QBlUAT7y5i1XQCHulxgIby1XQEICCAFCAggASg0I____________ARAA",
    whatsappNumber: "917005640194",
    pricing: "₹600",
    pricingNote: "Per person / per night • Includes ₹100 discount and all taxes",
    capacity: "10 bunk beds + 1 extra bed • Up to 11 guests",
    bookingPolicy:
      "A 50% advance payment of the total booking amount is required to confirm reservation. The remaining balance must be settled upon arrival at check-in.",
    hours: ["Check-in: 12:00 PM onwards", "Check-out: Before 1:00 PM"],
    highlights: [
      "Premium unisex shared accommodation",
      "Free high-speed Wi-Fi",
      "24 hrs security and CCTV",
      "Near bus stand, taxi stand, and city access points",
    ],
    attractions: [
      { name: "Aizawl Peak Restaurant", meta: "Approx. 2 km • 5–10 mins drive" },
      { name: "Bara Bazaar", meta: "Approx. 3 km • 10 mins drive" },
      { name: "Solomon's Temple", meta: "Approx. 10 km • 20–25 mins drive" },
      { name: "Reiek Tlang", meta: "Approx. 30 km • 45–60 mins drive" },
      { name: "14 Beans", meta: "Approx. 3 km • 10 mins drive" },
      { name: "Sakawrhmuituai Tlang", meta: "Approx. 9 km • 20 mins drive" },
    ],
    amenities: [
      "Air Conditioned",
      "Privacy Curtains",
      "Socket Near Every Bed",
      "Free High-Speed Wi-Fi",
      "24 Hours Security & CCTV",
      "Locker Facility",
      "Hot & Cold Water",
      "Indian & Western Toilets",
      "Hair Dryer & Steam Iron",
      "Drying Area",
      "Restaurant One Floor Up",
    ],
    transit: [
      "1 Minute Walk from Inter State Bus Terminal",
      "1 Minute Walk from City Bus Stand",
      "1 Minute Walk from Taxi Stand",
      "20 Minutes to Mualpui Helipad",
      "Approx. 22 km from Sairang Railway Station • 40–50 Minutes Drive",
      "Approx. 32 km from Lengpui Airport • 50–60 Minutes Drive",
    ],
    paymentDetails: {
      name: "Lalbiaksanga",
      upi: "9615968379@ptyes",
    },
  };

  const bookingSheetEndpoint = "https://script.google.com/macros/s/AKfycbxOLcTajpiC4ZAuOHkJYWmOQEOE61yBqlku2qhFO0jCUrrjdMehEq04TNFLkr1quw/exec";
  const totalCapacity = 11;

  const [submitStatus, setSubmitStatus] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [availability, setAvailability] = useState({
    loading: false,
    live: false,
    bookedBeds: 0,
    remainingBeds: totalCapacity,
    message: "Select check-in and check-out dates to estimate availability. Final confirmation will be checked in our reservation system.",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    notes: "",
    paymentConfirmed: false,
  });

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const requestedGuests = Math.max(1, Number(formData.guests || 1));
  const estimatedAdvancePayment = requestedGuests * 300;
  const estimatedBalancePayment = requestedGuests * 300;
  const canSubmitBooking = requestedGuests <= totalCapacity && formData.paymentConfirmed;

  React.useEffect(() => {
    if (!formData.checkIn || !formData.checkOut) {
      setAvailability({
        loading: false,
        live: false,
        bookedBeds: 0,
        remainingBeds: totalCapacity,
        message: "Select check-in and check-out dates to estimate availability. Final confirmation will be checked in our reservation system.",
      });
      return;
    }

    setAvailability({
      loading: false,
      live: false,
      bookedBeds: 0,
      remainingBeds: totalCapacity,
      message: `Requested stay: ${formData.checkIn} to ${formData.checkOut}. Final confirmation will be checked in our reservation system.`,
    });
  }, [formData.checkIn, formData.checkOut]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (requestedGuests > totalCapacity) {
      setSubmitStatus("Selected guests exceed maximum capacity. Please reduce guest count or contact us on WhatsApp.");
      return;
    }

    if (!formData.paymentConfirmed) {
      setSubmitStatus("Please confirm that you understand the 50% advance payment requirement before submitting your booking request.");
      return;
    }

    setSubmitStatus("Sending booking request...");
    setBookingSubmitted(false);

    const payload = {
      property: business.name,
      fullName: formData.fullName || "-",
      contact: formData.contact || "-",
      checkIn: formData.checkIn || "-",
      checkOut: formData.checkOut || "-",
      guests: formData.guests || "-",
      notes: formData.notes || "-",
      submittedAt: new Date().toISOString(),
      requestedGuests,
      availabilityTracked: availability.live,
      paymentStatus: "Pending Advance Payment",
      bookingStatus: "Pending Confirmation",
      advanceAmount: estimatedAdvancePayment,
      balanceAmount: estimatedBalancePayment,
    };

    const message = [
      `Hello ${business.name}, I would like to make a booking inquiry.`,
      "",
      `Full name: ${payload.fullName}`,
      `Phone or email: ${payload.contact}`,
      `Check-in: ${payload.checkIn}`,
      `Check-out: ${payload.checkOut}`,
      `Guests: ${payload.guests}`,
      `Notes: ${payload.notes}`,
    ].join("\n");

    try {
      if (bookingSheetEndpoint && !bookingSheetEndpoint.includes("PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) {
        await fetch(bookingSheetEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });

        setSubmitStatus("Booking request submitted successfully. A 50% advance payment is required to confirm your reservation.");
        setBookingSubmitted(true);
        setFormData({
          fullName: "",
          contact: "",
          checkIn: "",
          checkOut: "",
          guests: "1",
          notes: "",
          paymentConfirmed: false,
        });
      } else {
        setSubmitStatus("Booking system is not connected yet. Opening WhatsApp instead.");
        window.open(
          `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }
    } catch (error) {
      setSubmitStatus("Could not submit booking online. Opening WhatsApp instead.");
      window.open(
        `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const SectionTitle = ({ eyebrow, title, text, dark = false }) => (
    <div className="mb-8">
      <p className={`text-sm uppercase tracking-[0.2em] ${dark ? "text-orange-100" : "text-orange-500"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl font-semibold tracking-tight md:text-4xl ${dark ? "text-white" : "text-neutral-900"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 max-w-2xl ${dark ? "text-orange-50" : "text-neutral-700"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-orange-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={business.logo}
              alt="Graceland Bunks Logo"
              className="h-14 w-14 rounded-full object-cover shadow-md"
            />
            <div>
              <div className="text-xl font-semibold">{business.name}</div>
              <div className="text-sm text-orange-500">{business.tagline}</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#gallery">Gallery</a>
            <a href="#booking">Booking</a>
            <a href="#guide">Guide</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img
                src={business.logo}
                alt="Graceland Bunks Logo"
                className="h-20 w-20 rounded-full object-cover shadow-lg"
              />
              <div className="inline-flex rounded-full border border-orange-100 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm">
                Official Boutique Bunk Stay in Aizawl
              </div>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Stay simple. Stay stylish. Stay rested.
            </h1>
            <p className="mt-4 text-lg text-neutral-700 md:text-xl">{business.tagline}</p>
            <p className="mt-6 max-w-xl leading-7 text-neutral-700">
              Graceland Bunks is a premium unisex shared accommodation designed for travelers who value comfort, aesthetics, and convenience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-medium text-white shadow-sm">Reserve Your Stay</a>
              <a href="#overview" className="rounded-2xl border border-orange-200 bg-white px-5 py-3 text-sm font-medium">Explore Property</a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white shadow-sm">
              <div className="text-sm text-orange-100">Starting from</div>
              <div className="mt-3 text-5xl font-semibold">{business.pricing}</div>
              <div className="mt-4 rounded-2xl bg-white/20 px-4 py-3 text-sm text-orange-50">{business.pricingNote}</div>
              <div className="mt-3 rounded-2xl bg-white/20 px-4 py-3 text-sm text-orange-50">{business.capacity}</div>
            </div>
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <div className="text-sm font-medium text-orange-500">Guest highlights</div>
              <div className="mt-5 grid gap-3 text-sm">
                {business.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-orange-100 bg-stone-50 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-6xl px-6 py-8">
          <SectionTitle
            eyebrow="Property Overview"
            title="Everything you need for a comfortable stay"
            text="A clean and convenient stay experience with practical facilities, central access, and guest-friendly policies."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <h3 className="text-xl font-semibold">Accommodation</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <div className="rounded-xl bg-stone-50 px-4 py-3">Premium unisex shared accommodation</div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">10 bunk beds + 1 extra bed</div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">Designed for up to 11 guests</div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <h3 className="text-xl font-semibold">Pricing</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <div className="rounded-xl bg-stone-50 px-4 py-3">{business.pricing} per person / per night</div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">Includes ₹100 discount and all taxes</div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">Great value for solo and group travelers</div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <h3 className="text-xl font-semibold">Check-in Details</h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                {business.hours.map((item) => (
                  <div key={item} className="rounded-xl bg-stone-50 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-6 py-12">
          <SectionTitle eyebrow="Gallery & Facilities" title="Space, comfort, and convenience" text="This export keeps the structure lightweight for deployment. You can replace the placeholder gallery panels with real property photos later." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-dashed border-orange-200 bg-white p-10 text-orange-500 shadow-sm">Interior gallery section ready for your room photos</div>
            <div className="rounded-[2rem] border border-dashed border-orange-200 bg-white p-10 text-orange-500 shadow-sm">Tourist and nearby attraction photos can be added here</div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <h3 className="text-xl font-semibold">Amenities & Facilities</h3>
              <div className="mt-4 grid gap-3 text-sm text-neutral-700">
                {business.amenities.map((item) => (
                  <div key={item} className="rounded-xl bg-stone-50 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <h3 className="text-xl font-semibold">Transit Convenience</h3>
              <div className="mt-4 grid gap-3 text-sm text-neutral-700">
                {business.transit.map((item) => (
                  <div key={item} className="rounded-xl bg-stone-50 px-4 py-3">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="guide" className="mx-auto max-w-6xl px-6 py-12">
          <SectionTitle eyebrow="Mini Tourist Guide" title="Explore Mizoram during your stay" text="Nearby places that travelers can enjoy easily from Graceland Bunks." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {business.attractions.map((place, index) => (
              <div key={place.name} className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold">{index + 1}</div>
                  <div className="text-xl font-semibold">{place.name}</div>
                  <div className="mt-3 text-sm text-orange-500">{place.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm ring-1 ring-stone-200">
            <div className="border-b border-orange-100 p-8">
              <SectionTitle eyebrow="Location" title="Find Graceland Bunks" text={business.address} />
            </div>
            <div className="bg-stone-50 p-8">
              <a href={business.mapsLink} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-medium text-white shadow-sm">Open location in Google Maps</a>
            </div>
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white shadow-sm md:p-10">
              <SectionTitle eyebrow="Booking & Payment" title="Reserve your bunk stay" text="Send your stay details and we will confirm availability as soon as possible." dark />
              <div className="-mt-2 rounded-2xl border border-orange-300/30 bg-orange-400/20 px-4 py-3 text-sm text-orange-50">{business.bookingPolicy}</div>
              <div className="mt-4 rounded-2xl bg-white/20 px-4 py-4 text-sm text-orange-50">
                Bookings are automatically recorded into our reservation management system upon submission with payment and booking status tracking.
              </div>
              <div className="mt-4 rounded-2xl bg-white/20 px-4 py-4 text-sm text-orange-50">
                <strong>Availability Status:</strong><br />
                {availability.message}
              </div>
              <div className="mt-4 rounded-2xl bg-white/20 px-4 py-4 text-sm text-orange-50">
                <strong>Payment Tracking:</strong><br />Initial status: Pending Advance Payment<br />Booking remains unconfirmed until payment is verified.<br /><br /><strong>Payment Details:</strong><br />
                Name: {business.paymentDetails.name}<br />
                UPI: {business.paymentDetails.upi}
              </div>
              <div className="mt-4 space-y-3 text-sm text-orange-50">
                <div className="rounded-2xl bg-white/20 px-4 py-3">Advance payment is required to confirm reservation</div>
                <div className="rounded-2xl bg-white/20 px-4 py-3">The remaining balance must be settled at check-in</div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <form className="grid gap-4" onSubmit={handleBookingSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">Full name</label>
                  <input type="text" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} className="w-full rounded-2xl border border-orange-200 bg-stone-50 px-4 py-3" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">Phone or email</label>
                  <input type="text" value={formData.contact} onChange={(e) => handleChange("contact", e.target.value)} className="w-full rounded-2xl border border-orange-200 bg-stone-50 px-4 py-3" placeholder="Your contact details" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="date" value={formData.checkIn} onChange={(e) => handleChange("checkIn", e.target.value)} className="w-full rounded-2xl border border-orange-200 bg-stone-50 px-4 py-3" />
                  <input type="date" value={formData.checkOut} onChange={(e) => handleChange("checkOut", e.target.value)} className="w-full rounded-2xl border border-orange-200 bg-stone-50 px-4 py-3" />
                </div>
                <input type="number" min="1" max={totalCapacity} value={formData.guests} onChange={(e) => handleChange("guests", e.target.value)} className="w-full rounded-2xl border border-orange-200 bg-stone-50 px-4 py-3" />
                <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm text-neutral-700">
                  {`Requested: ${requestedGuests} guest(s) • Maximum capacity: ${totalCapacity} beds`}
                </div>
                <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm text-neutral-700">
                  {`Estimated advance payment to confirm booking: ₹${estimatedAdvancePayment}`}
                </div>
                <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm text-neutral-700">
                  {`Estimated balance payable at check-in: ₹${estimatedBalancePayment}`}
                </div>
                <textarea rows={4} value={formData.notes} onChange={(e) => handleChange("notes", e.target.value)} className="w-full rounded-2xl border border-orange-200 bg-stone-50 px-4 py-3" placeholder="Tell us anything important about your stay" />
                <label className="flex items-start gap-3 rounded-2xl bg-orange-50 px-4 py-4 text-sm text-neutral-700">
                  <input
                    type="checkbox"
                    checked={formData.paymentConfirmed}
                    onChange={(e) => handleChange("paymentConfirmed", e.target.checked)}
                    className="mt-1 h-4 w-4 accent-orange-500"
                  />
                  <span>
                    I understand that a 50% advance payment is required to confirm my booking, and the remaining balance must be paid upon arrival at check-in.
                  </span>
                </label>
                {submitStatus ? (
                  <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm text-neutral-700">
                    <div>{submitStatus}</div>
                    {bookingSubmitted ? (
                      <div className="mt-3 space-y-2 text-sm text-neutral-700">
                        <div className="rounded-xl bg-white px-3 py-3">Next step: Please complete 50% advance payment to confirm your reservation.</div>
                        <div className="rounded-xl bg-white px-3 py-3">After payment, send your payment screenshot on WhatsApp at {business.phone}.</div>
                        <div className="rounded-xl bg-white px-3 py-3">Your booking will remain under <strong>Pending Confirmation</strong> until payment is verified.</div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <button type="submit" disabled={!canSubmitBooking} className={`rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-sm ${canSubmitBooking ? "bg-gradient-to-r from-orange-500 to-amber-500" : "bg-orange-200 cursor-not-allowed"}`}>
                  {requestedGuests > totalCapacity ? "Not Enough Beds Available" : formData.paymentConfirmed ? "Send Booking Request" : "Confirm Payment Policy to Continue"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white shadow-sm">
              <SectionTitle eyebrow="Contact" title="Contact & stay details" dark />
              <div className="-mt-2 space-y-3 text-orange-50">
                <a href={`https://wa.me/${business.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl bg-white px-4 py-2 text-sm font-medium text-neutral-900">Chat on WhatsApp</a>
                <p>{business.phone}</p>
                <p>{business.email}</p>
                <p>{business.address}</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/90 backdrop-blur p-8 shadow-lg ring-1 ring-orange-100">
              <SectionTitle eyebrow="Guest Essentials" title="Quick information before you book" />
              <div className="-mt-2 space-y-3 text-neutral-700">
                <div className="rounded-2xl bg-orange-50 px-4 py-3">Premium unisex shared accommodation</div>
                <div className="rounded-2xl bg-orange-50 px-4 py-3">10 bunk beds + 1 extra bed</div>
                <div className="rounded-2xl bg-orange-50 px-4 py-3">Advance payment required to confirm reservation</div>
                <div className="rounded-2xl bg-orange-50 px-4 py-3">Easy access to city transport and tourist destinations</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-orange-500 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={business.logo}
              alt="Graceland Bunks Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span>© 2026 {business.name}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
