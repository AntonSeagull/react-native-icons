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

export const TbBathOff = (props: IconProps) => {
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
        <Path d="M16 12h4a1 1 0 0 1 1 1v3q-.001.468-.103.904m-1.61 2.378A4 4 0 0 1 17 20H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h8M6 12V6m1.178-2.824C7.43 3.063 7.708 3 8 3h3v2.25M4 21l1-1.5M20 21l-1-1.5M3 3l18 18" />
      </G>
    </Svg>
  );
};