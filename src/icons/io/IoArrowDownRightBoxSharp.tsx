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

export const IoArrowDownRightBoxSharp = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M480 480H315.636v-32h109.737l-43.637-43.636h22.628v-22.628L448 425.372V315.636h32zM216 193.372l188.364 188.364V32H32v372.364h349.736L193.373 216z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};