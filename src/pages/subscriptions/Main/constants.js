const PLANS = [
  {
    title: "Basic",
    desc: "Best way to get started",
    price: {
      monthly: "₹250",
      yearly: "₹200"
    },
    offer: "-20%",
    newPlan: false,
    recommended: false,
    features: [
      "This is a feature",
      "This is a feature",
      "This is a feature",
      "This is a feature",
      "This is a feature",
    ]
  },
  {
    title: "Standard",
    desc: "Step up you protein game",
    price: {
      monthly: "₹500",
      yearly: "₹400"
    },
    offer: null,
    newPlan: false,
    recommended: true,
    features: [
      "This is a feature",
      "This is a feature",
      "This is a feature",
      "This is a feature",
      "This is a feature",
    ]
  },
  {
    title: "Family",
    desc: "Health, for you an your family",
    price: {
      monthly: "₹1800",
      yearly: "₹1500"
    },
    offer: null,
    newPlan: true,
    recommended: false,
    features: [
      "This is a feature",
      "This is a feature",
      "This is a feature",
      "This is a feature",
      "This is a feature",
    ]
  },
]

export default PLANS;