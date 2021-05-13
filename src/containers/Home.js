import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
