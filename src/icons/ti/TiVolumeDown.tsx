import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const TiVolumeDown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.138 5.824c-.449 0-.905.152-1.356.453L11.11 8.058C10.357 8.561 8.904 9 8 9c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175V8c0-1.495-.965-2.176-1.862-2.176M8 15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1c1.211 0 2.907-.495 4-1.146v6.293C10.907 15.495 9.211 15 8 15m7 3-.006.12-.104-.062-1.89-1.26V9.202l1.891-1.261.104-.062L15 8zm3.292-7.706a1 1 0 0 0 .002 1.414c.345.345.535.803.535 1.291 0 .489-.19.948-.536 1.294a.999.999 0 1 0 1.414 1.414c.724-.723 1.122-1.685 1.122-2.708s-.398-1.984-1.123-2.707a1 1 0 0 0-1.414.002" />
      </G>
    </Svg>
  );
};