export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'convert':
      const {lbs, feet, inch} = action.payload;
      const meters = (Number(feet) * 12 + Number(inch)) / 36;
      return {...state, kg: Number(lbs) * 0.453, meter: meters};

    default:
      return state;
  }
};
