import SignupForm from "@/components/form/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-blue-100">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left image section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/signupImage.jpg"
            alt="Team working"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right form section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
