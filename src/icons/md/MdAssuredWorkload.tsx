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

export const MdAssuredWorkload = (props: IconProps) => {
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
        <Path d="M5 10h2v7H5zM11 10h2v7h-2zM22 6 12 1 2 6v2h20zM2 19v2h12.4c-.21-.64-.32-1.31-.36-2zM19 12.26V10h-2v3.26zM20 14l-4 2v2.55c0 2.52 1.71 4.88 4 5.45 2.29-.57 4-2.93 4-5.45V16zm-.72 7-2.03-2.03 1.06-1.06.97.97 2.41-2.38 1.06 1.06z" />
      </G>
    </Svg>
  );
};