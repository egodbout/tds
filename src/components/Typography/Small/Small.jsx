import React from 'react'
import PropTypes from 'prop-types'

import safeRest from '../../../utils/safeRest'

import styles from '../Text/Text.modules.scss'

/**
 * Small print, such as copyright and legal text.
 *
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.22.0</span>
 */
const Small = ({ children, ...rest }) => (
  <small {...safeRest(rest)} className={`${styles.small} ${styles.smallFont}`}>
    {children}
  </small>
)

Small.propTypes = {
  /**
   * The text.
   */
  children: PropTypes.string.isRequired
}

export default Small
