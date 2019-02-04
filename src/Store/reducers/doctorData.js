import { addReducer } from 'reactn';
import { DOCTOR_DATA } from './storeNames';

export const DOCTOR_SHIFT = {
  DAY: 'Dia',
  NIGHT: 'Noche'
};

export const DOCTOR_DAY = {
  FRIDAY: 'Viernes',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo'
};

export const getNewDutyDay = () => {
  return {
    day: '',
    shift: ''
  };
};

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

addReducer('doctorDataAddDutyDay', state => {
  const newState = { ...state };
  newState[DOCTOR_DATA].dutyDays.push(getNewDutyDay());
  return newState;
});

addReducer('doctorDataRemoveDutyDay', (stage, idx) => {
  const newState = { ...stage };
  newState[DOCTOR_DATA].dutyDays.splice(idx, 1);
  return newState;
});

addReducer('doctorDataEditDutyDay', (stage, idx, key, value) => {
  const newState = { ...stage };
  newState[DOCTOR_DATA].dutyDays[idx][key] = value;
  return newState;
});
