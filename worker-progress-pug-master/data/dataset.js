// data/dataset.js
module.exports = {
    worker: {
      name: 'Madeleine Willson',
      claimNo: '20042047',
      reportDate: 'March 15, 2024',
      submitted: 'March 19, 2024 19:21',
      appId: '712041',
    },
    returnToWork: {
      status: 'I returned to work on:',
      date: 'March 14, 2024',
      dutyType: 'Full duties, reduced hours',
      expectedReturn: 'April 01, 2024',
      concerns: 'No concerns at this time.',
      contact: { name: 'John Doe', date: 'March 18, 2024' },
    },
    recovery: {
      fullyRecovered: false,
      comments: 'Still experiencing occasional discomfort.',
    },
    medicalTreatment: {
      ongoing: true,
      providerType: 'Physiotherapist',
      lastTreatments: [
        { date: 'March 10, 2024', name: 'Dr. Smith' },
        { date: 'March 12, 2024', name: 'Dr. Adams' },
      ],
    },
    homeExercises: {
      doing: true,
      list: ['Knee bends – 3×10', 'Hamstring stretches – 3×15s'],
    },
    medication: {
      taking: true,
      name: 'Ibuprofen 200 mg',
      nextTreatment: 'March 20, 2024',
    },
    additionalInfo: 'No additional information.',
  };
  