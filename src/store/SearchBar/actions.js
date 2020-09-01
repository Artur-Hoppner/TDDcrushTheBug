const actions = {
  getByThisKeyword(context, keyWord) {
    context.commit('getByKeyword', keyWord);
  }
};

export default actions;
