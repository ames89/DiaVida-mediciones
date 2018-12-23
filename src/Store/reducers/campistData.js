import { addReducer } from 'reactn';
import { CAMPIST_DATA } from './storeNames';

export const INSULIN_SCHEMA_SCALE = 'scale';
export const INSULIN_SCHEMA_RATIO = 'ratio';

export const BREAKFAST = 'breakfast';
export const LUNCH = 'lunch';
export const DINNER = 'dinner';

export const LESS_THAN_80 = '<80';
export const BETWEEN_81_120 = '81-120';
export const BETWEEN_161_250 = '161-250';
export const BIGGER_THAN_250 = '250<';

export const CORRECTION_FACTOR = 'correctionFactor';

export const basalDosage = {
  dosage: '',
  time: ''
};

export const store = {
  [CAMPIST_DATA]: {
    name: '',
    lastname: '',
    yearsOld: '',
    weight: '',
    team: '',
    drugs: '',
    allergies: '',
    basalDosage: [{ ...basalDosage }],
    insulinSchemaType: INSULIN_SCHEMA_SCALE, // one of 'scale'|'ratio'
    insulinSchemaScale: {
      [BREAKFAST]: {
        [LESS_THAN_80]: '',
        [BETWEEN_81_120]: '',
        [BETWEEN_161_250]: '',
        [BIGGER_THAN_250]: ''
      },
      [LUNCH]: {
        [LESS_THAN_80]: '',
        [BETWEEN_81_120]: '',
        [BETWEEN_161_250]: '',
        [BIGGER_THAN_250]: ''
      },
      [DINNER]: {
        [LESS_THAN_80]: '',
        [BETWEEN_81_120]: '',
        [BETWEEN_161_250]: '',
        [BIGGER_THAN_250]: ''
      },
      comment: ''
    },
    insulinSchemaRatio: {
      [BREAKFAST]: '',
      [LUNCH]: '',
      [DINNER]: '',
      [CORRECTION_FACTOR]: '',
      comment: ''
    }
  }
};

addReducer('initCampistData', state => {
  return {
    ...state,
    [CAMPIST_DATA]: { ...store[CAMPIST_DATA] }
  };
});

addReducer('campistDataSetValue', (state, key, value) => {
  const newState = { ...state };
  newState[CAMPIST_DATA][key] = value;
  return newState;
});

addReducer('campistDataBasalDosageAdd', stage => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].basalDosage.push({ ...basalDosage });
  return newState;
});

addReducer('campistDataBasalDosageRemove', (stage, idx) => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].basalDosage.splice(idx, 1);
  return newState;
});

addReducer('campistDataBasalDosageEdit', (stage, idx, key, value) => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].basalDosage[idx][key] = value;
  return newState;
});

addReducer('campistDataChangeInsulinSchemaType', (stage, type) => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].insulinSchemaType = type;
  return newState;
});

addReducer(
  'campistDataSetInsulinSchemaScaleValue',
  (stage, time, type, value) => {
    const newState = { ...stage };
    if (typeof value !== 'undefined') {
      newState[CAMPIST_DATA].insulinSchemaScale[time][type] = value;
    } else {
      value = type;
      type = time;
      newState[CAMPIST_DATA].insulinSchemaScale[time] = value;
    }
    return newState;
  }
);

addReducer('campistDataSetInsulinSchemaRatioValue', (stage, type, value) => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].insulinSchemaRatio[type] = value;
  console.log(newState[CAMPIST_DATA].insulinSchemaRatio);
  return newState;
});
