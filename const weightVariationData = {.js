const weightVariationData = {
  standards: [
    {
      dosageForm: "Immediate Release Tablets",
      types: [
        {
          type: "Uncoated Tablets",
          
          ranges: [
            { weightRange: "<130mg", tolerance: 7.5 },
            { weightRange: "130-324mg", tolerance: 5 },
            { weightRange: ">324mg", tolerance: 3 },
          ],
        },
        {
          type: "Coated Tablets",
          ranges: [
            { weightRange: "<130mg", tolerance: 7.5 },
            { weightRange: "130-324mg", tolerance: 5 },
            { weightRange: ">324mg", tolerance: 3 },
          ],
        },
      ],
    },
    {
      dosageForm: "Sustained Release Tablets",
      types: [
        { type: "Matrix Tablets", tolerance: 5 },
        { type: "Reservoir Tablets", tolerance: 5 },
      ],
    },
    {
      dosageForm: "Controlled Release Tablets",
      types: [
        { type: "Extended-release Tablets", tolerance: 5 },
        { type: "Delayed-release Tablets", tolerance: 5 },
      ],
    },
    {
      dosageForm: "Lozenges",
      types: [
        { type: "Compressed Lozenges", tolerance: 5 },
        { type: "Hand-rolled Lozenges", testNotRequired: true },
      ],
    },
    {
      dosageForm: "Capsules",
      types: [
        { type: "Hard Gelatin Capsules", tolerance: 10 },
        { type: "Soft Gelatin Capsules", tolerance: 10 },
      ],
    },
    {
      dosageForm: "Powder for Oral Suspension",
      types: [
        { type: "Single-dose Sachets", tolerance: 10 },
        { type: "Multi-dose Containers", tolerance: 10 },
      ],
    },
    {
      dosageForm: "Effervescent Tablets",
      types: [{ type: "Effervescent Tablets", tolerance: 5 }],
    },
    {
      dosageForm: "Effervescent Powders",
      types: [{ type: "Unit Dose", tolerance: 10 }],
    },
    {
      dosageForm: "Effervescent Granules",
      types: [{ type: "Unit Dose", tolerance: 10 }],
    },
    {
      dosageForm: "Powder for Inhalation",
      types: [
        { type: "Pre-metered Doses", tolerance: 10 },
        { type: "Bulk Powder", testNotRequired: true },
      ],
    },
  ],
};
