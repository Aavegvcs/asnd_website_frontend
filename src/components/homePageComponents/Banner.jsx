"use client";
import React, { useState, useRef, useEffect } from "react";
import Container from "../Container/Container";
import validator from "validator";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import mainPageBanner from "@/assets/mainPageBanner.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import verified from "@/assets/verified.svg";

const Banner = () => {
  const bgBannerImage = {
    backgroundImage: `url(${mainPageBanner.src})`,
  };

  const [contactInput, setContactInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [countryCode, setCountryCode] = useState("in");

  // Refs for both inputs
  const phoneInputRef = useRef(null);
  const textInputRef = useRef(null); // New ref for text input

  const checkInputType = (value) => {
    const trimmedValue = value.trim();
    const phoneRegex = /^[0-9+]/;
    const digitsOnly = trimmedValue.replace(/\D/g, "");
    return phoneRegex.test(trimmedValue) && digitsOnly.length >= 4;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setContactInput(value);

    const isLikelyPhone = checkInputType(value);

    if (isLikelyPhone) {
      setIsPhone(true);
      const digitsOnly = value.replace(/\D/g, "");
      setPhoneInput(`+91${digitsOnly}`);
      setCountryCode("in");
    } else {
      setIsPhone(false);
      setPhoneInput("");
      setCountryCode("in");
    }
  };

  const handlePhoneChange = (value, country) => {
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length < 4) {
      // Switch back to text input and focus it
      setIsPhone(false);
      setContactInput("");
      setPhoneInput("");
      // Focus the text input after state update
      setTimeout(() => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 0);
    } else {
      // Valid phone input in progress
      setPhoneInput(value);
      setContactInput(value);
      setCountryCode(country.countryCode);
    }
  };

  useEffect(() => {
    if (isPhone && phoneInputRef.current) {
      phoneInputRef.current.focus();
      const input = phoneInputRef.current;
      const length = input.value.length;
      input.setSelectionRange(length, length);
    } else if (!isPhone && textInputRef.current) {
      // Focus text input when switching back
      textInputRef.current.focus();
    }
  }, [isPhone]);

  const handleSubmit = async () => {
    const input = contactInput.trim();

    if (!input) {
      setError("Required");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const payload = {};

      if (validator.isEmail(input)) {
        payload.email = input;
      } else {
        const phoneNumber = parsePhoneNumberFromString(
          input,
          countryCode.toUpperCase()
        );
        if (phoneNumber && phoneNumber.isValid()) {
          payload.phone = phoneNumber.number;
        } else {
          setError("Please enter a valid email or phone number.");
          setIsLoading(false);
          return;
        }
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_INDIA}/api/send-email`,
        payload
      );

      setContactInput("");
      setPhoneInput("");
      setIsPhone(false);
      setShowPopup(true);
    } catch (error) {
      console.error("Submission error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-auto flex flex-col justify-center w-full">
      <div
        className="w-full md:h-[640px] h-full pt-[18px]"
        style={bgBannerImage}
      >
        <div className="flex flex-col justify-center h-full">
          <Container>
            <div className="text-white md:w-[675px] w-[100%] md:px-0 px-[16px] md:mt-0 md:mb-0 mt-[80px] mb-[45px]">
              <h1 className="md:text-[48px] text-[25px] font-bold mb-[20px] md:leading-[60px] leading-[40px]">
                Empowering Innovation Through Technology
              </h1>
              <h2 className="md:text-[20px] text-[16px] md:leading-[36px] leading-[30px] mb-[32px] font-medium">
                From strategy to execution, ASND Technology delivers custom IT
                solutions that drive growth and digital transformation.
              </h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[20px] mb-[20px] items-center">
                {isPhone ? (
                  <PhoneInput
                    country={"in"}
                    value={phoneInput}
                    onChange={handlePhoneChange}
                    inputProps={{
                      ref: phoneInputRef,
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                      background: "transparent",
                      border: "1px solid white",
                      color: "white",
                      fontSize: "16px",
                      borderRadius: "6px",
                    }}
                    buttonStyle={{
                      background: "transparent",
                      border: "none",
                      padding: "0 10px",
                    }}
                    dropdownStyle={{
                      background: "#333",
                      color: "white",
                      border: "1px solid white",
                    }}
                    containerStyle={{
                      width: "100%",
                      maxWidth: "388px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    placeholder="Enter your phone"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="Enter your email or phone"
                    value={contactInput}
                    onChange={handleInputChange}
                    ref={textInputRef} // Attach ref to text input
                    className="w-full max-w-[388px] px-4 py-3 text-[16px] border border-white rounded-md text-white bg-transparent"
                  />
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full max-w-[200px] md:w-auto bg-gradient-to-r from-[#0B49F5] to-[#8800FF] text-white px-6 py-3 rounded-[12px] font-medium cursor-pointer"
                >
                  {isLoading ? "Submitting..." : "Get Started"}
                </button>
              </div>
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#000]/40 bg-opacity-50 transition-opacity duration-300 z-50">
                  <div className="bg-white py-6 md:px-[40px] px-[16px] text-center shadow-lg relative w-full mx-[16px] md:mx-0 md:w-[614px] md:h-[340px] h-full rounded-[20px]">
                    <button
                      className="absolute top-3 right-3 text-[#222222] bg-[#EEEEEE] rounded-[12px] flex gap-10 px-[10px] py-[8px] cursor-pointer hover:text-gray-700 text-[20px] leading-[20px]"
                      onClick={() => setShowPopup(false)}
                    >
                      close ✖
                    </button>
                    <div className="mb-[38px] mt-[36px]">
                      <img
                        className="mx-auto"
                        src={verified.src}
                        alt="Verified"
                      />
                    </div>
                    <h3 className="text-[36px] leading-[100%] font-semibold text-[#000]">
                      Thank You!
                    </h3>
                    <div className="text-[#8C8C8C] text-[24px] leading-[24px] md:mt-10 mt-5">
                      Your details have been successfully. Thanks!
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <p className="text-red-400 text-[14px] mb-2">{error}</p>
              )}

              <p className="text-[16px] leading-[20px]">
                Our team will soon be in contact, ready to elevate your business
                journey.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner;
