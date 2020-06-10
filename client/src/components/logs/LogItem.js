import React from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";
import {connect} from "react-redux";
import M from 'materialize-css/dist/js/materialize.min'

import {deleteLog,setCurrent} from "../../actions/logActions";
const LogItem = ({log,deleteLog,setCurrent}) => {
    const onDelete=()=>{
        deleteLog(log._id);
        M.toast({html:`Log name ${log.message} has successfully been deleted`})

    }
    return (
        <div>
            <li className="collection-item">
                <div>
                    <a className={`modal-trigger ${log.attention?'red-text':'blue-text'}`} href="#edit-log-modal" onClick={()=>setCurrent(log)}>{log.message} </a>
                    <br/>
                    <span className="grey-text">ID#{log.id} </span> Last updated by {' '}
                    <span className="black-text">
                        <span className="black-text"> {log.tech}</span> on{''} <Moment format={'MMMM do YYYY.h:mm:ss a'}>{log.date}</Moment>
                    </span>
                    <a href="#!" onClick={onDelete} className="secondary-content">
                        <i className="material-icons grey-text">delete</i>
                    </a>
                </div>
            </li>

        </div>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
};

export default connect(null,{deleteLog,setCurrent})(LogItem);