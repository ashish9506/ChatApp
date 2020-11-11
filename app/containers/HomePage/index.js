
import React,{memo} from 'react';
import  MainBar  from '../../components/mainbar';
import SideBar from '../../components/sidebar'
import GlobalStyle from '../../global-styles'

import {useInjectReducer} from '../../utils/injectReducer'
import reducer from './reducer'
import {stateDataSelector} from './selectors'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {compose} from 'redux'

 function HomePage(props) {
  useInjectReducer({key:"data",reducer})
  return (
  <div className='container-fluid'>
     
      <div className='row'>
        <SideBar data={props.stateData.contacts}/>
        <MainBar />
         
        
      </div>
      <GlobalStyle/>
  </div>
  );
}
const mapStateToProps=createStructuredSelector({
  stateData:stateDataSelector()
})

const withConnect=connect(mapStateToProps)

export default compose(withConnect,memo)(HomePage)