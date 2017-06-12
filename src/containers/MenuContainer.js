import { connect } from 'react-redux';
import Menu  from '../components/Menu';
import * as actions from '../actions'



const mapStateToProps = (state) => {
return { 
}
}

const mapDispatchToProps = (dispatch) => {
return {
    onItemClick:(args)=>{
        alert(args);
        dispatch(actions.InsertObject(args));
    }
    };
}

const MenuContainer =connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MenuContainer;