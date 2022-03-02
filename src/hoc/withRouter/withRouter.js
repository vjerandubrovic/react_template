import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

// withRouter component
const withRouter = Component => {

    const ComponentWithRouterProp = props => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      
    // return JSX with above properties
    return (
        <Component
          { ...props }
          router={ { location, navigate, params } }
        />
      );
    }
  
    return ComponentWithRouterProp;
}

// export withRouter
export default withRouter;