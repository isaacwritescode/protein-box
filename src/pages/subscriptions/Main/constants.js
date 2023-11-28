const PLANS = {
  regular: [
    {
      title: "Salads",
      desc: "Only Salad Subscription",
      price: "₹6,000",
      offer: "-20%",
      newPlan: false,
      recommended: false,
      features: [
        "Different varieties of super healthy",
        "Nutrient-rich ingredients",
        "Fresh and locally sourced produce",
      ],
    },
    {
      title: "Brown Rice",
      desc: "Brown Rice Lunch Box Subscription",
      price: "₹6,500",
      offer: null,
      newPlan: false,
      recommended: true,
      features: [
        "One Meal a Day (26 Meals a Month) – Rs. 6,500/-",
        "Two Meals a Day (52 Meals a Month) – Rs. 11,000/-",
        "High fiber content for better digestion",
      ],
    },
    {
      title: "Pro Athlete",
      desc: "Pro Athlete High Protein Subscription",
      price: "₹7,000",
      offer: null,
      newPlan: true,
      recommended: false,
      features: [
        "One Meal a Day (26 Meals a Month) – Rs. 7,000/-",
        "Two Meals a Day (52 Meals a Month) – Rs. 12,000/-",
      ],
    },
  ],
  prime: [
    {
      title: "Basic",
      desc: "One Meal a Day",
      price: "₹8,000",
      offer: "-20%",
      newPlan: false,
      recommended: false,
      features: ["26 Rotational Meals a month", "Customizable meal options"],
    },
    {
      title: "Standard",
      desc: "Two Meals a Day",
      price: "₹14,000",
      offer: null,
      newPlan: false,
      recommended: true,
      features: [
        "52 Rotational Meals a month",
        "Variety of cuisines available",
      ],
    },
    {
      title: "Pro",
      desc: "Two Meals a Day + Breakfast/Shake",
      price: "₹16,000",
      offer: null,
      newPlan: true,
      recommended: false,
      features: [
        "52 Rotational Meals a month & 26 Shakes/Breakfast",
        "Tailored nutrition for peak performance",
      ],
    },
  ],
};

export default PLANS;
