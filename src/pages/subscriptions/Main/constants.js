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
      title: "Lunch Boxes",
      desc: "Brown Rice Lunch Box Subscription",
      price: "₹6,500",
      offer: null,
      newPlan: false,
      recommended: true,
      features: [
        "One Meal a Day (26 Meals a Month) – Rs. 6,500/-",
        "Two Meals a Day (52 Meals a Month) – Rs. 12,000/-",
        "High protein corporate meals",
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
        "Truly Eat Like A Pro!",
      ],
    },
  ],
  prime: [
    {
      title: "Prime One",
      desc: "One Meal a Day",
      price: "₹8,500",
      offer: "-20%",
      newPlan: false,
      recommended: false,
      features: [
        "26 Rotational Meals a month",
        "Customizable meal options",
        "Free Delivery (Within 8Kms) & In-House Dietician Support",
      ],
    },
    {
      title: "Prime Two",
      desc: "Two Meals a Day",
      price: "₹15,000",
      offer: null,
      newPlan: false,
      recommended: true,
      features: [
        "52 Rotational Meals a month",
        "Variety of cuisines available",
        "Free Delivery (Within 8Kms) & In-House Dietician Support",
      ],
    },
    {
      title: "Prime Two Plus",
      desc: "Two Meals a Day + Shake",
      price: "₹17,000",
      offer: null,
      newPlan: true,
      recommended: false,
      features: [
        "52 Rotational Meals a month & 26 Hi Pro Shakes",
        "Tailored nutrition for peak performance",
        "Free Delivery (Within 8Kms) & In-House Dietician Support",
      ],
    },
  ],
};

export default PLANS;
