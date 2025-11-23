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

export const SlExclamation = (props: IconProps) => {
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
        <Path d="M480 674V192c0-18 14-32 32-32s32 14 32 32v482zm0 63h64v60h-64zM0 512C0 229 229 0 512 0s512 229 512 512-229 512-512 512S0 795 0 512m961 0c0-247-202-448-449-448S64 265 64 512s201 448 448 448 449-201 449-448" />
      </G>
    </Svg>
  );
};