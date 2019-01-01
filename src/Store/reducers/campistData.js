import { addReducer } from 'reactn';
import { CAMPIST_DATA } from './storeNames';

export const INSULIN_SCHEMA_SCALE = 'scale';
export const INSULIN_SCHEMA_RATIO = 'ratio';

export const BREAKFAST = 'breakfast';
export const MORNING_SNACK = 'morningSnack';
export const LUNCH = 'lunch';
export const AFTERNOON_SNACK = 'afternoonSnack';
export const DINNER = 'dinner';
export const BEFORE_SLEEP = 'beforeSleep';

export const LESS_THAN_80 = '<80';
export const BETWEEN_81_160 = '81-160';
export const BETWEEN_161_250 = '161-250';
export const BIGGER_THAN_250 = '250<';

export const CARBOHYDRATES = 'carbohydrates';
export const PROTEIN = 'protein';
export const FRUIT = 'fruit';
export const DAIRY = 'dairy';

export const CORRECTION_FACTOR = 'correctionFactor';

export const getNewBasalDosage = () => ({
  dosage: '',
  time: ''
});

export const getNewStore = () => {
  return {
    [CAMPIST_DATA]: {
      deleted: false,
      names: '',
      lastNames: '',
      age: '',
      weight: '',
      team: '',
      cabin: '',
      drugs: '',
      allergies: '',
      basalDosage: [getNewBasalDosage()],
      insulinSchemaType: INSULIN_SCHEMA_SCALE, // one of 'scale'|'ratio'
      insulinSchemaScale: {
        [BREAKFAST]: {
          [LESS_THAN_80]: '',
          [BETWEEN_81_160]: '',
          [BETWEEN_161_250]: '',
          [BIGGER_THAN_250]: ''
        },
        [LUNCH]: {
          [LESS_THAN_80]: '',
          [BETWEEN_81_160]: '',
          [BETWEEN_161_250]: '',
          [BIGGER_THAN_250]: ''
        },
        [DINNER]: {
          [LESS_THAN_80]: '',
          [BETWEEN_81_160]: '',
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
      },
      foodPortions: {
        [BREAKFAST]: {
          [CARBOHYDRATES]: '',
          [PROTEIN]: '',
          [FRUIT]: '',
          [DAIRY]: ''
        },
        [MORNING_SNACK]: {
          [CARBOHYDRATES]: '',
          [PROTEIN]: '',
          [FRUIT]: '',
          [DAIRY]: ''
        },
        [LUNCH]: {
          [CARBOHYDRATES]: '',
          [PROTEIN]: '',
          [FRUIT]: '',
          [DAIRY]: ''
        },
        [AFTERNOON_SNACK]: {
          [CARBOHYDRATES]: '',
          [PROTEIN]: '',
          [FRUIT]: '',
          [DAIRY]: ''
        },
        [DINNER]: {
          [CARBOHYDRATES]: '',
          [PROTEIN]: '',
          [FRUIT]: '',
          [DAIRY]: ''
        },
        [BEFORE_SLEEP]: {
          [CARBOHYDRATES]: '',
          [PROTEIN]: '',
          [FRUIT]: '',
          [DAIRY]: ''
        }
      }
    }
  };
};

addReducer('initCampistData', state => {
  return {
    ...state,
    ...getNewStore()
  };
});

addReducer('campistDataSetValue', (state, key, value) => {
  const newState = { ...state };
  newState[CAMPIST_DATA][key] = value;
  return newState;
});

addReducer('campistDataBasalDosageAdd', stage => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].basalDosage.push(getNewBasalDosage());
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
  return newState;
});

addReducer('campistDataSetFoodPortionValue', (stage, time, type, value) => {
  const newState = { ...stage };
  newState[CAMPIST_DATA].foodPortions[time][type] = value;
  return newState;
});

addReducer('campistDataSet', (state, data) => {
  return {
    ...state,
    [CAMPIST_DATA]: data
  };
});
