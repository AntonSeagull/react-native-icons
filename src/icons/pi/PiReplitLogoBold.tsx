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

export const PiReplitLogoBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M216 84h-60V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h60v40H72a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-44h60a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-84 128H76v-40h56Zm0-128H76V44h56Zm80 64h-56v-40h56Z" />
      </G>
    </Svg>
  );
};