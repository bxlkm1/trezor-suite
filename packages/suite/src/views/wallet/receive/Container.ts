import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { injectIntl } from 'react-intl';
import * as receiveActions from '@wallet-actions/receiveActions';

import { AppState, Dispatch } from '@suite-types';
import SendIndex from './index';

const mapStateToProps = (state: AppState) => ({
    selectedAccount: state.wallet.selectedAccount,
    device: state.suite.device,
    receive: state.wallet.receive,
    modal: state.modal,
    locks: state.suite.locks,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showAddress: bindActionCreators(receiveActions.showAddress, dispatch),
});

export type StateProps = ReturnType<typeof mapStateToProps>;
export type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type Props = StateProps & DispatchProps;

export interface ChildProps {
    account: NonNullable<Props['selectedAccount']['account']>;
    addresses: Props['receive'];
    showAddress: Props['showAddress'];
    disabled: boolean;
    locked: boolean;
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(SendIndex));