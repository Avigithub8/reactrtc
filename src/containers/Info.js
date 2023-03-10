import { connect } from 'react-redux'

import Info from '../components/info'
import { getInfo } from '../actionCreators'

const mapStateToProps = (state) => ({
    info: state.info
})

const mapDispatchToProps = { getSdkInfo: getInfo }

export default connect(mapStateToProps, mapDispatchToProps)(Info)