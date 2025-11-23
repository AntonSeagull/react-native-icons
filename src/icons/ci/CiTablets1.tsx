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

export const CiTablets1 = (props: IconProps) => {
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
        <Path d="M14.76 3.065a6.17 6.17 0 0 0-6.11 5.58 6.159 6.159 0 1 0 6.71 6.71 6.159 6.159 0 0 0-.6-12.29m-5.53 16.87A5.166 5.166 0 0 1 5.24 11.5l7.27 7.26a5.15 5.15 0 0 1-3.28 1.175m3.99-1.88-7.27-7.27a5.165 5.165 0 0 1 7.27 7.27m2.15-3.71a6.12 6.12 0 0 0-5.72-5.71 5.157 5.157 0 1 1 5.72 5.71" data-name="Tablets 1" />
      </G>
    </Svg>
  );
};