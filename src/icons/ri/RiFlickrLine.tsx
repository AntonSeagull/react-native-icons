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

export const RiFlickrLine = (props: IconProps) => {
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
        <Path d="M6 17A5 5 0 1 0 6 7a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      </G>
    </Svg>
  );
};