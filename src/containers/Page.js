import { connect } from 'react-redux';
import Page from 'src/components/Page';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
