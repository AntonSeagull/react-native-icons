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

export const FaGoogleDrive = (props: IconProps) => {
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
        <Path d="M339 314.9 175.4 32h161.2l163.6 282.9zm-137.5 23.6L120.9 480h310.5L512 338.5zM154.1 67.4 0 338.5 80.6 480 237 208.8z" />
      </G>
    </Svg>
  );
};