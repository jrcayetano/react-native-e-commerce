import {StyleSheet} from 'react-native';
import colorsApp from './Colors';

export const generalStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  vAlignRowCenter: {
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 0.2,
  },
  picker: {
    borderBottomWidth: 0.2,
  },
  form: {
    width: '100%',
    backgroundColor: 'white',
    padding: 30,
    borderWidth: 0.2,
  },
  formRow: {
    marginBottom: 20,
  },
  labeledField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnPrimary: {
    backgroundColor: colorsApp.COLOR_PRIMARY,
    borderColor: colorsApp.COLOR_PRIMARY,
    textAlign: 'center',
    borderRadius: 15,
    paddingTop: 0.3,
    paddingBottom: 0.3,
    paddingLeft: 0.7,
    paddingRight: 0.7,
  },

  btnSecondary: {
    backgroundColor: colorsApp.COLOR_SECONDARY,
    borderColor: colorsApp.COLOR_SECONDARY,
    color: 'white',
    textAlign: 'center',
    borderRadius: 15,
    paddingTop: 0.3,
    paddingBottom: 0.3,
    paddingLeft: 0.7,
    paddingRight: 0.7,
  },
});
