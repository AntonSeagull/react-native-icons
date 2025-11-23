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

export const HiMiniUserCircle = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M10 12a5.99 5.99 0 0 0-4.793 2.39A6.48 6.48 0 0 0 10 16.5a6.48 6.48 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12" clipRule="evenodd" />
      </G>
    </Svg>
  );
};