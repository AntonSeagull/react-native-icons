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

export const PiChairBold = (props: IconProps) => {
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
        <Path d="M208 128h-28v-20h12a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h12v20H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h8v32a12 12 0 0 0 24 0v-32h96v32a12 12 0 0 0 24 0v-32h8a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20M68 44h120v40H68Zm32 64h56v20h-56Zm104 60H52v-16h152Z" />
      </G>
    </Svg>
  );
};