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

export const RiPatreonLine = (props: IconProps) => {
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
        <Path d="M15.001 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-13-13h5v20h-5zm2 2v16h1V4z" />
      </G>
    </Svg>
  );
};