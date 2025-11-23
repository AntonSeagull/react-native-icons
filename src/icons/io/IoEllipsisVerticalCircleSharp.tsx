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

export const IoEllipsisVerticalCircleSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208m-234-90a26 26 0 1 1 26 26 26 26 0 0 1-26-26m0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26m0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26" />
      </G>
    </Svg>
  );
};