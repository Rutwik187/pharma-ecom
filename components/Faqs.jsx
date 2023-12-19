import React from "react";

const Faqs = () => {
  const data = [
    {
      question: " What are nutraceutical products?",
      answer:
        "Nutraceutical products are supplements or dietary components that offer health and beauty benefits, promoting well-being through their nutritional properties.",
    },
    {
      question: "How do your products promote hair growth?",
      answer:
        "Our products support hair growth by providing essential nutrients that strengthen hair follicles and encourage the growth of new healthy hair.",
    },
    {
      question: "Can your products prevent hair loss?",
      answer:
        "Yes, our products can help reduce hair loss by addressing the underlying causes, such as nutrient deficiencies and scalp health.",
    },
    {
      question: "Are these products suitable for all hair types?",
      answer:
        "Yes, our products are formulated to benefit a wide range of hair types and concerns, from dry and brittle hair to oily and thinning hair.",
    },
    {
      question: "Do your products contain any harmful chemicals or additives?",
      answer:
        "No, our products are formulated with natural ingredients and are free from harmful chemicals, making them safe for long-term use.",
    },
    {
      question: "How long does it take to see results with your products?",
      answer:
        "Results can vary, but many customers experience noticeable improvements in hair and skin within a few weeks to a few months of regular use.",
    },
    {
      question:
        "What are nutraceutical products?Can these products be used alongside other skincare or haircare products?",
      answer:
        "Yes, our products can complement your existing skincare and haircare routines, enhancing their effectiveness.",
    },
    {
      question: "Are your products suitable for both men and women?",
      answer:
        "Yes, our products are designed to benefit both men and women. Hair and skin health is a universal concern, and our formulations cater to all genders.",
    },
    {
      question: "Are your products tested on animals?",
      answer:
        "No, we are committed to cruelty-free practices and do not test our products on animals.",
    },
    {
      question: " How can I purchase your products and where do you ship to?",
      answer:
        "You can purchase our products directly from our website, and we offer shipping to [mention your shipping destinations]. Please check our website for more details on shipping options.",
    },
  ];

  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto my-24">
      <h2 className="text-[28px] md:text-[34px]  font-semibold leading-tight my-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {data.map((item, index) => {
          return (
            <details
              key={index}
              className="group border-s-4 border-blue-5=600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  {item.question}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
