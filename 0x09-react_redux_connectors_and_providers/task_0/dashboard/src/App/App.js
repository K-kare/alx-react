export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
  };
};
export default connect(mapStateToProps)(App);
