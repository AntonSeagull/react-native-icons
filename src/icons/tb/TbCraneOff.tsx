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

export const TbCraneOff = (props: IconProps) => {
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
        <Path d="M6 21h6M9 21V9M9 5V3L8 4M6 6 3 9h6M13 9h8M9 3l10 6M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18" />
      </G>
    </Svg>
  );
};