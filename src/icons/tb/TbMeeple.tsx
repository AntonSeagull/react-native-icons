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

export const TbMeeple = (props: IconProps) => {
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
        <Path d="M9 20H4a1 1 0 0 1-1-1c0-2 3.378-4.907 4-6-1 0-4-.5-4-2 0-2 4-3.5 6-4 0-1.5.5-4 3-4s3 2.5 3 4c2 .5 6 2 6 4 0 1.5-3 2-4 2 .622 1.093 4 4 4 6a1 1 0 0 1-1 1h-5c-1 0-2-4-3-4s-2 4-3 4" />
      </G>
    </Svg>
  );
};