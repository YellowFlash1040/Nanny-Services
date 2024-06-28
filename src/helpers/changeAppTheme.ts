import { transitionTime } from '../constants';
import { Theme } from '../types';

const changeColorVariable = (variableName: string, value: string) => {
  document.documentElement.style.setProperty(variableName, value);
};

const addTransitionEffect = () => {
  document
    .querySelectorAll('*')
    .forEach((el) => el.classList.add('theme-transition-effect'));
  setTimeout(() => {
    document
      .querySelectorAll('*')
      .forEach((el) => el.classList.remove('theme-transition-effect'));
  }, transitionTime);
};

export const changeAppTheme = (newTheme: Theme) => {
  addTransitionEffect();

  if (newTheme === Theme.Red) {
    changeColorVariable('--main-color', '#f03f3b');
    changeColorVariable('--second-color', '#f03f3b33');
  } else if (newTheme === Theme.Blue) {
    changeColorVariable('--main-color', '#0957c3');
    changeColorVariable('--second-color', '#0957c333');
  } else if (newTheme === Theme.Green) {
    changeColorVariable('--main-color', '#103931');
    changeColorVariable('--second-color', '#10393133');
  } else {
    changeColorVariable('--main-color', '#f03f3b');
    changeColorVariable('--second-color', '#f03f3b33');
  }
};
