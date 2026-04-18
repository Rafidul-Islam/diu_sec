import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const X = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const Plus = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const Loader2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
const AlertCircle = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const AlertTriangle = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const interestOptions = [
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Data Science",
  "DevOps",
  "UI/UX Design",
  "Backend Development",
  "Frontend Development",
  "Full Stack",
  "Blockchain",
];

const skillOptions = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Git",
  "SQL",
  "MongoDB",
  "Docker",
  "AWS",
  "None (Beginner)",
];

function SectionHeader({ step, title, required }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold flex items-center justify-center flex-shrink-0 border border-blue-100">
        {step}
      </div>
      <h3 className="text-base font-bold text-white text-xl tracking-tight">
        {title}
        {required && <span className="text-red-500 font-normal ml-1">*</span>}
      </h3>
    </div>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-500">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full h-10 px-3 rounded-lg border border-gray-200 bg-slate-800 text-sm text-white placeholder:text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-slate-900";

const selectClass =
  "w-full h-10 px-3 rounded-lg border border-gray-200 bg-slate-800 text-sm  outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:bg-slate-800 appearance-none cursor-pointer";

function ChipSelector({
  options,
  selected,
  onToggle,
  onAdd,
  customValue,
  onCustomChange,
  placeholder,
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-slate-900 border-gray-50  text-gray-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {active && <span className="text-blue-500 text-xs">✓</span>}
              {opt}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        <input
          className={inputClass}
          placeholder={placeholder}
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd();
            }
          }}
        />
        <button
          type="button"
          onClick={onAdd}
          className="h-10 w-10 flex-shrink-0 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 flex items-center justify-center transition"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {selected.length > 0 && (
        <div className="p-3 bg-slate-900 rounded-lg border border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
            Selected
          </p>
          <div className="flex flex-wrap gap-2">
            {selected.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700"
              >
                {item}
                <button
                  type="button"
                  onClick={() => onToggle(item)}
                  className="w-4 h-4 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-400 flex items-center justify-center transition text-xs leading-none"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function RegistrationForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    phone: "",
    currentSemester: "",
    currentYear: "",
    githubUrl: "",
    linkedinUrl: "",
    whyJoin: "",
    projectIdea: "",
    secMembership: false,
    transactionId: "",
    method: "",
  });

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customInterest, setCustomInterest] = useState("");
  const [customSkill, setCustomSkill] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleInterest = (v) => {
    setSelectedInterests((prev) =>
      prev.includes(v) ? prev.filter((i) => i !== v) : [...prev, v],
    );
  };

  const toggleSkill = (v) => {
    setSelectedSkills((prev) =>
      prev.includes(v) ? prev.filter((s) => s !== v) : [...prev, v],
    );
  };

  const addCustomInterest = () => {
    const v = customInterest.trim();
    if (v && !selectedInterests.includes(v)) {
      setSelectedInterests([...selectedInterests, v]);
    }
    setCustomInterest("");
  };

  const addCustomSkill = () => {
    const v = customSkill.trim();
    if (v && !selectedSkills.includes(v)) {
      setSelectedSkills([...selectedSkills, v]);
    }
    setCustomSkill("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!selectedInterests.length) {
      setError("Please select at least one interest");
      setIsLoading(false);
      return;
    }
    if (!selectedSkills.length) {
      setError("Please select at least one skill");
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        full_name: formData.fullName || undefined,
        email: formData.email || undefined,
        student_id: formData.studentId || undefined,
        phone: formData.phone || null,
        current_semester: formData.currentSemester || null,
        current_year: formData.currentYear || null,
        interests: selectedInterests.join(", "),
        skills: selectedSkills.join(", "),
        github_url: formData.githubUrl || null,
        linkedin_url: formData.linkedinUrl || null,
        why_join: formData.whyJoin || undefined,
        project_idea: formData.projectIdea || null,
        sec_membership:
          typeof formData.secMembership === "string"
            ? formData.secMembership
            : null,
        transaction_id: formData.transactionId || null,
        method: formData.method || null,
      };

      const response = await fetch("/api/registration/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "same-origin",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data && typeof data === "object") {
          const fieldErrors = Object.keys(data).filter((k) =>
            Array.isArray(data[k]),
          );
          if (fieldErrors.length > 0)
            throw new Error(
              data[fieldErrors[0]][0] || `${fieldErrors[0]} validation error`,
            );
          if (data.error || data.message)
            throw new Error(data.error || data.message);
        }
        throw new Error("Failed to submit registration");
      }

      navigate("/register/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const isSECMember = formData.secMembership !== false;

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Hero */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            Software Engineering Club — Application
          </span>
          <h1 className="text-3xl font-extrabold text-White tracking-tight">
            Join the program{" "}
            <span className="text-red-500">(Registration Closed)</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Complete all required fields to apply. Fields marked{" "}
            <span className="text-red-500">*</span> are required.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-slate-900 rounded-2x shadow-sm overflow-hidden rounded-2xl">
          <form onSubmit={handleSubmit}>
            {/* 1 — Personal Info */}
            <section className="p-6 border-b border-gray-100">
              <SectionHeader step={1} title="Personal information" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full name" required>
                  <input
                    name="fullName"
                    className={inputClass}
                    placeholder="Akash Kundu"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </Field>
                <Field label="University email" required>
                  <input
                    name="email"
                    type="email"
                    className={inputClass}
                    placeholder="251-35-100@diu.edu.bd"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Field>
                <Field label="Student ID" required>
                  <input
                    name="studentId"
                    className={inputClass}
                    placeholder="251-35-100"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required
                  />
                </Field>
                <Field label="WhatsApp number">
                  <input
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="+8801627*****"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Field>
                <Field label="Current semester" required>
                  <select
                    className={selectClass}
                    value={formData.currentSemester}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentSemester: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="" disabled>
                      Select semester
                    </option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={String(i + 1)}>
                        {i + 1}
                        {["st", "nd", "rd"][i] ?? "th"} Semester
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="Batch">
                  <input
                    name="currentYear"
                    type="number"
                    className={inputClass}
                    placeholder="39"
                    value={formData.currentYear}
                    onChange={handleInputChange}
                  />
                </Field>
              </div>
            </section>

            {/* 2 — Interests */}
            <section className="p-6 border-b border-gray-100">
              <SectionHeader step={2} title="Areas of interest" required />
              <p className="text-sm text-gray-400 -mt-3 mb-4 ml-10">
                Select all that apply, or add your own.
              </p>
              <ChipSelector
                options={interestOptions}
                selected={selectedInterests}
                onToggle={toggleInterest}
                onAdd={addCustomInterest}
                customValue={customInterest}
                onCustomChange={setCustomInterest}
                placeholder="Add a custom interest..."
              />
            </section>

            {/* 3 — Skills */}
            <section className="p-6 border-b border-gray-100">
              <SectionHeader step={3} title="Current skills" required />
              <p className="text-sm text-gray-400 -mt-3 mb-4 ml-10">
                Select your level. Choose "None" if you're just starting out.
              </p>
              <ChipSelector
                options={skillOptions}
                selected={selectedSkills}
                onToggle={toggleSkill}
                onAdd={addCustomSkill}
                customValue={customSkill}
                onCustomChange={setCustomSkill}
                placeholder="Add a custom skill..."
              />
            </section>

            {/* 4 — Social */}
            <section className="p-6 border-b border-gray-100">
              <SectionHeader step={4} title="Social profiles" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="GitHub">
                  <input
                    name="githubUrl"
                    type="url"
                    className={inputClass}
                    placeholder="https://github.com/username"
                    value={formData.githubUrl}
                    onChange={handleInputChange}
                  />
                </Field>
                <Field label="Facebook">
                  <input
                    name="linkedinUrl"
                    type="url"
                    className={inputClass}
                    placeholder="https://facebook.com/username"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                  />
                </Field>
              </div>
            </section>

            {/* 5 — Membership */}
            <section className="p-6 border-b border-gray-100">
              <SectionHeader step={5} title="Membership" />
              {/* <label className="inline-flex items-center gap-2.5 cursor-pointer mb-5 px-3.5 py-2.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                  checked={isSECMember}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      secMembership: e.target.checked ? "" : false,
                      transactionId: e.target.checked
                        ? ""
                        : formData.transactionId,
                      method: e.target.checked ? "" : formData.method,
                    })
                  }
                />
                <span className="text-sm font-medium text-gray-700">
                  I am a SEC member
                </span>
              </label> */}

              {isSECMember ? (
                <Field label="SEC membership ID" required>
                  <input
                    className={inputClass}
                    placeholder="Enter your SEC membership ID"
                    required={isSECMember}
                    value={
                      typeof formData.secMembership === "string"
                        ? formData.secMembership
                        : ""
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        secMembership: e.target.value,
                      })
                    }
                  />
                </Field>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                      Send payment to
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>
                        <span className="font-semibold text-blue-700">
                          01611988305
                        </span>{" "}
                        — bKash
                      </div>
                      <div>
                        <span className="font-semibold text-blue-700">
                          01303090993
                        </span>{" "}
                        — Nagad
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Transaction ID" required>
                      <input
                        name="transactionId"
                        className={inputClass}
                        placeholder="Enter transaction ID"
                        value={formData.transactionId}
                        onChange={handleInputChange}
                        required={!isSECMember}
                      />
                    </Field>
                    <Field label="Payment method" required>
                      <select
                        className={selectClass}
                        value={formData.method}
                        onChange={(e) =>
                          setFormData({ ...formData, method: e.target.value })
                        }
                        required={!isSECMember}
                      >
                        <option value="" disabled>
                          Select method
                        </option>
                        <option value="bkash">bKash</option>
                        <option value="nagad">Nagad</option>
                      </select>
                    </Field>
                  </div>
                </div>
              )}
            </section>

            {/* 6 — Motivation */}
            <section className="p-6 border-b border-gray-100">
              <SectionHeader step={6} title="Tell us more" />
              <div className="space-y-4">
                <Field label="Why do you want to join Self Made Devs?" required>
                  <textarea
                    name="whyJoin"
                    className={`${inputClass} h-auto py-2.5`}
                    rows={5}
                    placeholder="Share your motivation, goals, and what you hope to achieve..."
                    value={formData.whyJoin}
                    onChange={handleInputChange}
                    required
                  />
                </Field>
                <Field label="Any project ideas in mind?">
                  <textarea
                    name="projectIdea"
                    className={`${inputClass} h-auto py-2.5`}
                    rows={4}
                    placeholder="Share any projects you'd like to build during the program..."
                    value={formData.projectIdea}
                    onChange={handleInputChange}
                  />
                </Field>
              </div>
            </section>

            {/* Footer */}
            <div className="p-6 bg-slate-900 space-y-4">
              <div className="flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-sm font-medium text-red-600">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                Registration is currently closed
              </div>

              {error && (
                <div className="flex items-start gap-2.5 px-4 py-3 bg-red-50 border border-red-100 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-600">{error}</p>
                    {error.includes("email") && (
                      <p className="text-xs text-red-400 mt-0.5">
                        Please use a different email address or contact support
                        if you believe this is an error.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled
                className="w-full h-11 rounded-xl bg-blue-100 text-blue-400 text-sm font-semibold flex items-center justify-center gap-2 cursor-not-allowed transition"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting application...
                  </>
                ) : (
                  "Submit application"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
