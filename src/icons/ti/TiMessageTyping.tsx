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

export const TiMessageTyping = (props: IconProps) => {
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
        <Path d="M18 6H5C3.35 6 2 7.35 2 9v7c0 1.65 1.35 3 3 3h1v3l3-3h9c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3m1 10c0 .542-.458 1-1 1H5c-.542 0-1-.458-1-1V9c0-.542.458-1 1-1h13c.542 0 1 .458 1 1zM7 14.5a2 2 0 1 1 .001-4.001A2 2 0 0 1 7 14.5m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.5 3a2 2 0 1 1 .001-4.001A2 2 0 0 1 11.5 14.5m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.5 3a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 14.5m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
      </G>
    </Svg>
  );
};