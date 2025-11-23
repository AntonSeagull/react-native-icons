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

export const TiBriefcase = (props: IconProps) => {
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
        <Path d="M18 7c0-1.654-1.346-3-3-3H9C7.346 4 6 5.346 6 7c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3M9 6h6c.551 0 1 .449 1 1H8c0-.551.449-1 1-1m10 11c0 .551-.449 1-1 1H6c-.551 0-1-.449-1-1v-1h14zM5 15v-5c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v5zm8-3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1" />
      </G>
    </Svg>
  );
};