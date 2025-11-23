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

export const Imrsquare = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M13.306 1.408A1 1 0 0 0 12.5 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 .999 1 1 1 0 0 0 .707-.293L7.413 11h2.586a1 1 0 0 0 .954-.702l2.5-8a1 1 0 0 0-.149-.891zM10.515 5H7a1 1 0 0 0 0 2h2.89l-.625 2H7a1 1 0 0 0-.707.293L4 11.586V3h7.14z" />
      </G>
    </Svg>
  );
};