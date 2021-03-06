import React from 'react';
import styled from '@emotion/styled';
import { Icon, buttons, shadows } from 'netlify-cms-ui-legacy';

const StyledSettingsButton = styled.button`
  ${buttons.button};
  ${buttons.default};
  ${shadows.drop};
  display: block;
  position: absolute;
  z-index: 100;
  right: 8px;
  top: 8px;
  opacity: 0.8;
  padding: 2px 4px;
  line-height: 1;
  height: auto;

  ${Icon} {
    position: relative;
    top: 1px;
  }
`;

const SettingsButton = ({ showClose, onClick }) => (
  <StyledSettingsButton onClick={onClick}>
    <Icon type={showClose ? 'close' : 'settings'} size="small" />
  </StyledSettingsButton>
);

export default SettingsButton;
