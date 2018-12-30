import React from 'reactn';
import { Paper, Grid, Typography } from '@material-ui/core';
import { getAllLogsPerCampist } from '../../../Store/firebase/Log';

import styles from './style.module.scss';
import moment from 'moment';
import {
  LOG_TYPE,
  FOOD_TYPES,
  INSULIN_TYPE,
  FOOD_TIME
} from '../../../Store/reducers/logsData';

class LogsInfo extends React.Component {
  state = {
    logs: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    getAllLogsPerCampist(this.props.campistId).then(data => {
      const elems = data
        .map(snapshot => {
          return snapshot.data();
        })
        .sort((a, b) => {
          return moment(a.datetime).isBefore(moment(b.datetime)) ? 1 : -1;
        })
        .reduce((acum, curr) => {
          if (!acum.length) {
            acum.push([curr]);
          } else {
            const lastArr = acum[acum.length - 1];
            const dateDay = moment(
              lastArr[lastArr.length - 1].datetime,
              moment.HTML5_FMT.DATETIME_LOCAL
            ).format('YYYY-MM-DD');

            if (
              moment(curr.datetime, moment.HTML5_FMT.DATETIME_LOCAL).format(
                'YYYY-MM-DD'
              ) === dateDay
            ) {
              lastArr.push(curr);
            } else {
              acum.push([curr]);
            }
          }
          return acum;
        }, []);
      this.setState({
        logs: elems,
        loading: false
      });
    });
  }

  typeDefined = elem => {
    switch (elem.type) {
      case 'food':
        return FOOD_TYPES[elem.foodType];
      case 'injection':
        return INSULIN_TYPE[elem.typeInjection];
      case 'medition':
        return FOOD_TIME[elem.foodTime];
      default:
        return '';
    }
  };

  showValue = elem => {
    switch (elem.type) {
      case 'food':
        return `${elem.carbs} g`;
      case 'injection':
        return `${elem.dosage} U`;
      case 'medition':
        return `${elem.result} mg/dL`;
      default:
        return '';
    }
  };

  render() {
    return (
      <Paper className={styles['component']} elevation={0} square>
        <Grid container spacing={8}>
          {this.state.logs.map(arrDay => {
            return (
              <Grid key={arrDay[0].datetime} item xs={12}>
                <Grid item xs={12}>
                  {moment(arrDay[0].datetime).format('DD/MM/YYYY')}
                </Grid>
                {arrDay.map(elem => {
                  return (
                    <Grid
                      key={JSON.stringify(elem)}
                      className={styles.details}
                      container
                      justify="space-between"
                    >
                      <Grid item>
                        <Typography color="textPrimary" variant="body1">
                          {LOG_TYPE[elem.type]} | {this.typeDefined(elem)}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {moment(elem.datetime).format('hh:mm a')}
                        </Typography>
                      </Grid>
                      <Grid item className={styles.value}>
                        <Typography variant="h6">
                          {this.showValue(elem)}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          {elem.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

export default LogsInfo;
