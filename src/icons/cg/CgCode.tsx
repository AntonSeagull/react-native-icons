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

export const CgCode = (props: IconProps) => {
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
        <Path fill="currentColor" d="m9.953 16.912-1.36 1.449-6.562-6.16L8.19 5.64l1.458 1.369-4.79 5.104 5.094 4.781zM14.047 16.912l1.36 1.449 6.562-6.16L15.81 5.64l-1.458 1.369 4.79 5.104-5.094 4.781z" />
      </G>
    </Svg>
  );
};