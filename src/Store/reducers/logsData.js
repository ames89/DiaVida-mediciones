import { addReducer } from 'reactn';
import {
  LOGFOOD_DATA,
  LOGINJECTION_DATA,
  LOGMEDITION_DATA
} from './storeNames';
import moment from 'moment';

export const FOOD_TYPES = {
  GLUCOSE_TABLET: 'Tableta de Glucosa',
  JUICE: 'Jugo',
  COOKIES: 'Galletas',
  MILK: 'Leche'
};

export const FOOD_TIME = {
  OTHER: 'Otro',
  BREAKFAST: 'Desayuno',
  MORNING_SNACK: 'Merienda mañana',
  LUNCH: 'Almuerzo',
  AFTERNOON_SNACK: 'Merienda tarde',
  DINNER: 'Cena',
  BEFORE_SLEEP: 'Antes de dormir'
};

export const INSULIN_TYPE = {
  FAST: 'Rápida',
  BASAL: 'Basal'
};

export const getNewLogFoodStore = campistId => {
  return {
    [LOGFOOD_DATA]: {
      campist: campistId,
      type: 'food',
      foodType: '',
      carbs: '',
      datetime: moment().format(moment.HTML5_FMT.DATETIME_LOCAL),
      description: ''
    }
  };
};

export const getNewLogInjectionStore = campistId => {
  return {
    [LOGINJECTION_DATA]: {
      campist: campistId,
      type: 'injection',
      dosage: '',
      datetime: moment().format(moment.HTML5_FMT.DATETIME_LOCAL),
      typeInjection: '',
      description: ''
    }
  };
};

export const getNewLogMeditionStore = campistId => {
  return {
    [LOGMEDITION_DATA]: {
      campist: campistId,
      type: 'medition',
      foodTime: 'OTHER',
      result: '',
      datetime: moment().format(moment.HTML5_FMT.DATETIME_LOCAL),
      description: ''
    }
  };
};

addReducer('initLogFoodData', (state, campistId) => {
  return {
    ...state,
    ...getNewLogFoodStore(campistId)
  };
});

addReducer('initLogInjectionData', (state, campistId) => {
  return {
    ...state,
    ...getNewLogInjectionStore(campistId)
  };
});

addReducer('initLogMeditionData', (state, campistId) => {
  return {
    ...state,
    ...getNewLogMeditionStore(campistId)
  };
});

addReducer('logFoodDataAddValue', (state, attName, value) => {
  const newState = { ...state };
  newState[LOGFOOD_DATA][attName] = value;
  return newState;
});

addReducer('logInjectionDataAddValue', (state, attName, value) => {
  const newState = { ...state };
  newState[LOGINJECTION_DATA][attName] = value;
  return newState;
});

addReducer('logMeditionDataAddValue', (state, attName, value) => {
  const newState = { ...state };
  newState[LOGMEDITION_DATA][attName] = value;
  return newState;
});
