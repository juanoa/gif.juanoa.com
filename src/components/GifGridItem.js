import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({title, url}) => {

    return (
        <div className="col">
            <div className="card shadow-sm card animate__animated animate__fadeIn">
                <div className="card-body">
                    <img src={url} alt={title} className={'gif'} />
                </div>
                <div className="card-footer">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}