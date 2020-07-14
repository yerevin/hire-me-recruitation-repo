import { StyleSheet } from 'react-native';
import { colors } from '../colors';

export const coreStyles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  main: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.lightPurple,
  },
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.lightPurple,
  },
  row: {
    flexDirection: 'row',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  lineAlignedTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex_1: {
    flex: 1,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  MH5: {
    marginHorizontal: 5,
  },
  PH15: {
    paddingHorizontal: 15,
  },

  addButtonFloating: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  addButtonFloatingHigher: {
    position: 'absolute',
    bottom: 90,
    right: 15,
  },
  addButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.purple,
    borderColor: colors.purple,
  },
  addButtonText: {
    fontSize: 35,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  actionButton: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    backgroundColor: colors.purple,
    borderColor: colors.lightPurple,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  actionButtonWithFlex: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 40,
    borderWidth: 1,
    height: 45,
    backgroundColor: colors.purple,
    borderColor: colors.lightPurple,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  actionButtonNotActive: {
    backgroundColor: colors.lightGray,
    borderColor: colors.lightGray,
  },

  breakLine: {
    marginVertical: 15,
    backgroundColor: colors.gray,
    alignSelf: 'center',
    width: 325,
    height: 1,
  },

  label: {
    fontSize: 14,
    marginHorizontal: 15,
    marginVertical: 5,
    color: colors.gray,
  },
  input: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    height: 45,
    borderColor: colors.purple,
  },

  listContainer: {
    flex: 1,
    paddingVertical: 5,
  },
  listItemContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 40,
    borderWidth: 1,
    height: 60,
    backgroundColor: colors.lightPurple,
    borderColor: colors.purple,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
