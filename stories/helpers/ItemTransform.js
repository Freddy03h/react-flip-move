import React, { Component } from 'react'
import classNames from 'classnames'
import FlipMove from '../../src'

import './ItemTransform.css'

class ItemTransform extends Component {
  render() {
    const { volume } = this.props
    const classNameRoot = classNames(
      'ItemTransform',
      volume.key,
      { 'ItemTransform--open': this.props.opened === true },
    )

    return (
      <FlipMove
        className={classNameRoot}
        onClick={this.props.onClick}
        easing="ease-in"
        duration={300}
        scale={true}
        enterAnimation={{
          from: {
            transform: 'translate(-195px) scale(0.74)',
            opacity: 0,
          },
          to: {
            transform: 'initial',
            opacity: 1,
          }
        }}
        leaveAnimation={{
          from: {
            transform: 'initial',
            opacity: 1,
          },
          to: {
            transform: 'translate(-195px) scale(0.74)',
            opacity: 0,
          }
        }}
      >
        <img
          className="ItemTransform__Img"
          src={ volume.img }
          key="image"
        />
        {
          this.props.opened &&
            <div className="ItemTransform__Body" key="body">
              <p className="ItemTransform__Title1">{ volume.title }</p>
              <p className="ItemTransform__Title2">{ volume.subtitle }</p>
              <p className="ItemTransform__Resume">{ volume.resume }</p>
            </div>
        }
        <div className="ItemTransform__Layer" key="layer"></div>
      </FlipMove>
    )
  }
}

export default ItemTransform
