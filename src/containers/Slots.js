import { connect } from 'react-redux';
import Slots from 'src/components/Leagues/Slots';

import {
  fetchSlots,
} from 'src/actions/interface';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  fetchSlots: (gameWeek) => {
    dispatch(fetchSlots(gameWeek));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slots);
