"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type Option = {
  id: string;
  label: string;
};

// Step options
const STEP1_OPTIONS: Option[] = [
  { id: "mobility", label: "Mobility and physical support" },
  { id: "companionship", label: "Companionship and social support" },
  { id: "meals", label: "Meal preparation and household tasks" },
  { id: "meds", label: "Medication reminders and health monitoring" },
];
const STEP2_OPTIONS: Option[] = [
  { id: "once", label: "Once a day" },
  { id: "twice", label: "Twice a day" },
  { id: "overnight", label: "Overnight stays" },
  { id: "fewtimes", label: "A few times a week" },
];
const STEP3_OPTIONS: Option[] = [
  { id: "short", label: "Short-term (respite or recovery care)" },
  { id: "long", label: "Long-term continuous support" },
  { id: "emergency", label: "Emergency / Immediate start" },
  { id: "unsure", label: "Not sure yet, need advice" },
];
const STEP4_OPTIONS: Option[] = [
  { id: "compassionate", label: "Compassionate and friendly carers" },
  { id: "flexible", label: "Flexible scheduling and reliability" },
  { id: "specialist", label: "Specialist expertise" },
  { id: "affordable", label: "Affordability and clear pricing" },
];

export default function ModalStepper({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const modalRef = useRef<HTMLDivElement | null>(null);
  const radiosRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Reset on open
  useEffect(() => {
    if (open) {
      setStep(1);
      setAnswers({});
      setFormData({ name: "", email: "", phone: "" });
      document.body.style.overflow = "hidden";
      setTimeout(() => radiosRef.current[0]?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // Step titles and messages
  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "What type of support do you need from a live-in carer?";
      case 2:
        return "How often would you like a home carer to visit?";
      case 3:
        return "How long do you require live-in care?";
      case 4:
        return "What is most important to you in choosing a home care service?";
      case 5:
        return (
          <div>
            <span className="bg-[#4DCEF7] text-white flex items-center justify-center md:h-[90px] md:w-[90px] h-[44px] w-[44px] rounded-full mx-auto mb-5">
              <FaCheck />
            </span>
            <h2 className="md:text-4xl text-2xl font-semibold text-title text-center mb-6 md:px-7 px-5">
              Great! We’ve found the best matches for you
            </h2>
            <p className="block text-sm font-medium text-desc mb-1 text-center">
              Now, we just need your details to complete your request.
            </p>
            <div className="mt-6 flex flex-col items-center justify-between gap-8">
              <button
                onClick={goNext}
                className="bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 inline-flex items-center gap-2 justify-center rounded-[50px] w-full"
              >
                Continue <FaArrowRightLong />
              </button>
              <button
                onClick={goBack}
                className="bg-transparent md:text-lg text-sm font-semibold font-poppins text-title md:py-5 py-3 md:px-7 px-5 inline-flex items-center gap-2 justify-center rounded-[50px] w-full border border-[#D8E1FC]"
              >
                Back
              </button>
            </div>
          </div>
        );
      case 6:
        return "Almost done! Please share your contact details.";
      case 7:
        return (
          <div className="max-w-[641px] mx-auto">
            <span className="flex items-center justify-center mx-auto mb-5">
              <Image
                src="/images/envlope.png"
                alt="envlope"
                width={98}
                height={98}
              />
            </span>
            <h2 className="md:text-4xl text-2xl font-semibold text-title text-center mb-6 md:px-7 px-5">
              Congratulations, your quote has been sent!
            </h2>
            <p className="block text-sm font-medium text-desc mb-1 text-center">
              We’ve successfully sent your personalised care quote to your email
              and phone number.
            </p>
            <Link
              href="#"
              className="bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 flex items-center gap-2 justify-center rounded-[50px] w-full mt-10"
            >
              Request a Call Back <FaArrowRightLong />
            </Link>
          </div>
        );
      default:
        return "";
    }
  };

  // Step options
  const getOptions = () => {
    switch (step) {
      case 1:
        return STEP1_OPTIONS;
      case 2:
        return STEP2_OPTIONS;
      case 3:
        return STEP3_OPTIONS;
      case 4:
        return STEP4_OPTIONS;
      default:
        return [];
    }
  };

  const handleSelect = (id: string) => {
    setAnswers((prev) => ({ ...prev, [step]: id }));
  };

  const goNext = () => {
    if (step < 6) {
      setStep((s) => s + 1);
      setTimeout(() => radiosRef.current[0]?.focus(), 50);
    } else if (step === 6) {
      const collectedData = {
        stepAnswers: answers,
        contact: formData,
      };
      console.log("✅ Form Submitted:", collectedData);
      setStep(7); // Show confirmation screen
    }
  };

  const goBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canContinue =
    step <= 4
      ? Boolean(answers[step])
      : step === 6
      ? formData.name && formData.email && formData.phone
      : true;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-[783px] rounded-[20px] bg-white px-6 py-16 md:p-[60px] shadow-[0px_20px_60px_rgba(17,24,39,0.12)]"
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-desc text-2xl"
        >
          <IoClose />
        </button>

        {/* Step indicators — only visible for step 1–4 */}
        {step <= 4 && (
          <div className="mb-6 flex justify-center">
            <div className="flex items-center md:gap-6 gap-3 max-w-[616px]">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex items-center">
                  <div className="flex items-center md:gap-3 gap-1.5">
                    <div
                      className={`md:text-2xl text-lg font-medium flex md:h-[64px] h-[36px] md:w-[64px] w-[36px] items-center justify-center rounded-full border ${
                        answers[n]
                          ? "bg-[#4DCEF7] border-[#4DCEF7] text-white"
                          : "bg-white border-[#D8E1FC] text-desc"
                      }`}
                    >
                      {String(n).padStart(2, "0")}
                    </div>

                    {n < 4 && (
                      <div
                        aria-hidden
                        className={`border-t-2 border-dashed w-[36px] md:w-[84px] ${
                          step > n ? "border-[#4DCEF7]" : "border-[#D8E1FC]"
                        }`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Title */}
        <h2 className="md:text-4xl text-2xl font-semibold text-title text-center mb-6 md:px-7 px-5">
          {getStepTitle()}
        </h2>

        {/* Step 1–4 options */}
        {step <= 4 && (
          <div className="rounded-[8.2px] border border-[#D8E1FC] bg-white p-8">
            <div className="grid gap-3">
              {getOptions().map((o, i) => {
                const active = answers[step] === o.id;
                return (
                  <button
                    key={o.id}
                    ref={(el) => {
                      radiosRef.current[i] = el;
                    }} // ✅ fixed
                    onClick={() => handleSelect(o.id)}
                    className={`relative flex w-full items-center gap-4 rounded-[8.2px] border p-4 text-left transition-all duration-300 ${
                      active
                        ? "border-[#4DCEF7] bg-[#E7F9FF]"
                        : "border-[#D8E1FC] bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        active
                          ? "bg-[#4DCEF7] border-[#4DCEF7]"
                          : "bg-white border-desc"
                      }`}
                    >
                      {active && (
                        <svg
                          className="h-3 w-3 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <div className="md:text-xl text-sm font-medium text-desc">
                      {o.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 6: Contact Form */}
        {step === 6 && (
          <div className="rounded-[8.2px] border border-[#D8E1FC] bg-white p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Contact Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full border border-[#D8E1FC] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4DCEF7]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full border border-[#D8E1FC] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4DCEF7]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full border border-[#D8E1FC] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4DCEF7]"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={goNext}
                disabled={!canContinue}
                className={`bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 inline-flex items-center gap-2 justify-center rounded-[50px] w-full ${
                  !canContinue && "opacity-40 cursor-not-allowed"
                }`}
              >
                Submit Request
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        )}

        {/* Navigation buttons (only for steps 1–4) */}
        {step <= 4 && (
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={goBack}
              disabled={step === 1}
              className={`bg-transparent md:text-lg text-sm font-semibold font-poppins text-title md:py-5 py-3 md:px-7 px-5 inline-flex items-center gap-2 justify-center rounded-[50px] max-w-[184px] w-full border border-[#D8E1FC] ${
                step === 1 && "opacity-40 cursor-not-allowed"
              }`}
            >
              Back
            </button>

            <button
              onClick={goNext}
              disabled={!canContinue}
              className={`bg-secondary hover:bg-primary md:text-lg text-sm font-semibold font-poppins text-white md:py-5 py-3 md:px-7 px-5 inline-flex items-center gap-2 justify-center rounded-[50px] max-w-[184px] w-full ${
                !canContinue && "opacity-40 cursor-not-allowed"
              }`}
            >
              Continue <FaArrowRightLong />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
