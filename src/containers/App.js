import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  error: state.connection.user.error,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
