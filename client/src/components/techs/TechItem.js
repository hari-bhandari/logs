import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {deleteTech} from "../../actions/techActions";
import M from 'materialize-css/dist/js/materialize.min'
const TechItem = ({tech,deleteTech}) => {
    const onDelete=()=>{
        deleteTech(tech._id)
        M.toast({html:`Tech ${tech.firstName+' '+ tech.lastName} has been deleted`})

    }

    return (
        <li className={"collection-item"} style={{ listStyleType: "none" }}>
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className={"secondary-content"} onClick={onDelete}>
                    <i className={"material-icons red-text"}>delete</i>
                </a>
            </div>

        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
};
export default connect(null,{deleteTech})(TechItem);