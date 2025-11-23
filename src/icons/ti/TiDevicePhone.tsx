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

export const TiDevicePhone = (props: IconProps) => {
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
        <Path d="M15 3H8C6.346 3 5 4.346 5 6v12c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3m1 15c0 .551-.449 1-1 1H8c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h7c.551 0 1 .449 1 1zM14 6H9c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1.5a1 1 0 1 0 2 0H14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1m0 10H9V7h5z" />
      </G>
    </Svg>
  );
};