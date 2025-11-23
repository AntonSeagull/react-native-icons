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

export const AiOutlineDatabase = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-600 72h560v208H232zm560 480H232V408h560zm0 272H232V680h560zM304 240a40 40 0 1 0 80 0 40 40 0 1 0-80 0m0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0m0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0" />
      </G>
    </Svg>
  );
};