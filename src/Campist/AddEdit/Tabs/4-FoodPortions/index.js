import React from 'reactn';
import { Paper, Grid, Button, Typography } from '@material-ui/core';

import { CAMPIST_DATA } from '../../../../Store/reducers/storeNames';
import Generic from '../generic';

import styles from './style.module.scss';
import InsulinInput from '../insulinInput';
import {
  BREAKFAST,
  CARBOHYDRATES,
  PROTEIN,
  FRUIT,
  DAIRY,
  MORNING_SNACK,
  LUNCH,
  AFTERNOON_SNACK,
  DINNER,
  BEFORE_SLEEP
} from '../../../../Store/reducers/campistData';

class FoodPortions extends Generic {
  changePortionValue = (time, type) => e => {
    this.global.campistDataSetFoodPortionValue(time, type, e.target.value);
  };
  render() {
    const { foodPortions } = this.global[CAMPIST_DATA];

    return (
      <Paper className={styles['component']} elevation={0} square>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Typography variant="h6">Desayuno</Typography>
            </Grid>
            <InsulinInput
              label="Carb"
              value={foodPortions[BREAKFAST][CARBOHYDRATES]}
              onChange={this.changePortionValue(BREAKFAST, CARBOHYDRATES)}
            />
            <InsulinInput
              label="Prot"
              value={foodPortions[BREAKFAST][PROTEIN]}
              onChange={this.changePortionValue(BREAKFAST, PROTEIN)}
            />
            <InsulinInput
              label="Frut"
              value={foodPortions[BREAKFAST][FRUIT]}
              onChange={this.changePortionValue(BREAKFAST, FRUIT)}
            />
            <InsulinInput
              label="Lact"
              value={foodPortions[BREAKFAST][DAIRY]}
              onChange={this.changePortionValue(BREAKFAST, DAIRY)}
            />
            {/* ------------------------------------------------ */}
            <Grid item xs={12}>
              <Typography variant="h6">Merienda Mañana</Typography>
            </Grid>
            <InsulinInput
              label="Carb"
              value={foodPortions[MORNING_SNACK][CARBOHYDRATES]}
              onChange={this.changePortionValue(MORNING_SNACK, CARBOHYDRATES)}
            />
            <InsulinInput
              label="Prot"
              value={foodPortions[MORNING_SNACK][PROTEIN]}
              onChange={this.changePortionValue(MORNING_SNACK, PROTEIN)}
            />
            <InsulinInput
              label="Frut"
              value={foodPortions[MORNING_SNACK][FRUIT]}
              onChange={this.changePortionValue(MORNING_SNACK, FRUIT)}
            />
            <InsulinInput
              label="Lact"
              value={foodPortions[MORNING_SNACK][DAIRY]}
              onChange={this.changePortionValue(MORNING_SNACK, DAIRY)}
            />
            {/* ------------------------------------------------ */}
            <Grid item xs={12}>
              <Typography variant="h6">Almuerzo</Typography>
            </Grid>
            <InsulinInput
              label="Carb"
              value={foodPortions[LUNCH][CARBOHYDRATES]}
              onChange={this.changePortionValue(LUNCH, CARBOHYDRATES)}
            />
            <InsulinInput
              label="Prot"
              value={foodPortions[LUNCH][PROTEIN]}
              onChange={this.changePortionValue(LUNCH, PROTEIN)}
            />
            <InsulinInput
              label="Frut"
              value={foodPortions[LUNCH][FRUIT]}
              onChange={this.changePortionValue(LUNCH, FRUIT)}
            />
            <InsulinInput
              label="Lact"
              value={foodPortions[LUNCH][DAIRY]}
              onChange={this.changePortionValue(LUNCH, DAIRY)}
            />
            {/* ------------------------------------------------ */}
            <Grid item xs={12}>
              <Typography variant="h6">Merienda tarde</Typography>
            </Grid>
            <InsulinInput
              label="Carb"
              value={foodPortions[AFTERNOON_SNACK][CARBOHYDRATES]}
              onChange={this.changePortionValue(AFTERNOON_SNACK, CARBOHYDRATES)}
            />
            <InsulinInput
              label="Prot"
              value={foodPortions[AFTERNOON_SNACK][PROTEIN]}
              onChange={this.changePortionValue(AFTERNOON_SNACK, PROTEIN)}
            />
            <InsulinInput
              label="Frut"
              value={foodPortions[AFTERNOON_SNACK][FRUIT]}
              onChange={this.changePortionValue(AFTERNOON_SNACK, FRUIT)}
            />
            <InsulinInput
              label="Lact"
              value={foodPortions[AFTERNOON_SNACK][DAIRY]}
              onChange={this.changePortionValue(AFTERNOON_SNACK, DAIRY)}
            />
            {/* ------------------------------------------------ */}
            <Grid item xs={12}>
              <Typography variant="h6">Cena</Typography>
            </Grid>
            <InsulinInput
              label="Carb"
              value={foodPortions[DINNER][CARBOHYDRATES]}
              onChange={this.changePortionValue(DINNER, CARBOHYDRATES)}
            />
            <InsulinInput
              label="Prot"
              value={foodPortions[DINNER][PROTEIN]}
              onChange={this.changePortionValue(DINNER, PROTEIN)}
            />
            <InsulinInput
              label="Frut"
              value={foodPortions[DINNER][FRUIT]}
              onChange={this.changePortionValue(DINNER, FRUIT)}
            />
            <InsulinInput
              label="Lact"
              value={foodPortions[DINNER][DAIRY]}
              onChange={this.changePortionValue(DINNER, DAIRY)}
            />
            {/* ------------------------------------------------ */}
            <Grid item xs={12}>
              <Typography variant="h6">Merienda antes de Dormir</Typography>
            </Grid>
            <InsulinInput
              label="Carb"
              value={foodPortions[BEFORE_SLEEP][CARBOHYDRATES]}
              onChange={this.changePortionValue(BEFORE_SLEEP, CARBOHYDRATES)}
            />
            <InsulinInput
              label="Prot"
              value={foodPortions[BEFORE_SLEEP][PROTEIN]}
              onChange={this.changePortionValue(BEFORE_SLEEP, PROTEIN)}
            />
            <InsulinInput
              label="Frut"
              value={foodPortions[BEFORE_SLEEP][FRUIT]}
              onChange={this.changePortionValue(BEFORE_SLEEP, FRUIT)}
            />
            <InsulinInput
              label="Lact"
              value={foodPortions[BEFORE_SLEEP][DAIRY]}
              onChange={this.changePortionValue(BEFORE_SLEEP, DAIRY)}
            />
            {/* ------------------------------------------------ */}
            <Grid item xs={12}>
              <Grid container justify="flex-end" spacing={8}>
                <Grid item>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={this.props.handleBack}
                  >
                    Anterior
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    type="submit"
                    disabled={this.props.isDisabledSubmit}
                  >
                    Almacenar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default FoodPortions;
