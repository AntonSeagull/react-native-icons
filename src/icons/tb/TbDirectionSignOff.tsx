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

export const TbDirectionSignOff = (props: IconProps) => {
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
        <Path d="m18.73 14.724 1.949-1.95a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-1.95 1.95m-2.01 2.01-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427.428 1.12.428 1.548 0l3.95-3.95M8 12h4M13.748 13.752 12 15.5M3 3l18 18" />
      </G>
    </Svg>
  );
};