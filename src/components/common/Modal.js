import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Cross from '../images/x.svg';

import styles from './Modal.module.css';

const Modal = ({ children, isOpen, hasClose, close }) => (
  <div
    className={
      cn(styles.modal, { [styles.isOpen]: isOpen })
    }
  >
    <div className={styles.inner}>
      <div className={styles.container}>
        {
          hasClose ?
            <div className={styles.close}>
              <Cross
                className={styles.close__icon}
                onClick={close}
              />
            </div> : null
        }
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  hasClose: PropTypes.bool,
  close: PropTypes.func,
};

Modal.defaultProps = {
  hasClose: true,
};

export default Modal;

const InfoButton = ({ children, onClick }) => (
  <button className={styles.infoButton} onClick={onClick}>
    {children}
  </button>
);

InfoButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export { InfoButton };
