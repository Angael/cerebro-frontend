import styled from 'styled-components';
import { ButtonBase } from '@mui/material';

export const ItemContainer = styled(ButtonBase)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);

  &.wide {
    grid-column: auto/span 2;
  }
  &.tall {
    grid-row: auto/span 2;
  }
`;

export const ThumbnailContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const TitleContainer = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;

  color: #f1f1f1;
  background: linear-gradient(
    0deg,
    rgba(16, 16, 16, 0.67) 0%,
    rgba(16, 16, 16, 0) 100%
  );
  transition: opacity 0.3s;
  opacity: 0;

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;

export const Thumbnail = styled('img')`
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.loading {
    filter: blur(4px);
  }
`;

export const CenterContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
