import { addReducer } from 'reactn';
import { DOCTOR_DATA } from './storeNames';

export const getNewStore = () => {
  return {
    [DOCTOR_DATA]: {
      deleted: false,
      names: '',
      lastNames: '',
      dutyDays: [getNewDutyDay()],
      phone: '',
      email: '',
      speciality: ''
    }
  };
};

addReducer('initDoctorData', state => {
  return {
    ...state,
    ...getNewStore()
  };
});

addReducer('doctorDataSetValue', (state, key, value) => {
  const newState = { ...state };
  newState[DOCTOR_DATA][key] = value;
  return newState;
});

addReducer('doctorDataSet', (state, data) => {
  return {
    ...state,
    [DOCTOR_DATA]: data
  };
});
