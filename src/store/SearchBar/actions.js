const actions = {
  getByThisKeyword(context, keyWord) {
    context.commit('getByKeyword', keyWord);
  },
  displayThisEntireArray(context) {
    context.commit('displayEntireArray');
  }
};

export default actions;
