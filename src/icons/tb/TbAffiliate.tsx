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

export const TbAffiliate = (props: IconProps) => {
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
        <Path d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275M11.683 12.317l5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 18.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M4 15.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
      </G>
    </Svg>
  );
};