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
  BREAKFAST: 'Desayuno',
  MORNING_SNACK: 'Merienda mañana',
  LUNCH: 'Almuerzo',
  AFTERNOON_SNACK: 'Merienda tarde',
  DINNER: 'Cena',
  BEFORE_SLEEP: 'Antes de dormir'
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
      datetime: '',
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
      foodTime: '',
      result: '',
      datetime: '',
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

addReducer('logFoodDataAddValue', (state, attName, value) => {
  const newState = { ...state };
  newState[LOGFOOD_DATA][attName] = value;
  return newState;
});
