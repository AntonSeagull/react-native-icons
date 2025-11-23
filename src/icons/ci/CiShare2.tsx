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

export const CiShare2 = (props: IconProps) => {
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
        <Path d="M18.44 15.94a2.5 2.5 0 0 0-1.96.95l-8.51-4.25a2.36 2.36 0 0 0 0-1.29l8.5-4.25a2.5 2.5 0 1 0-.53-1.54 2.3 2.3 0 0 0 .09.65l-8.5 4.25a2.5 2.5 0 1 0 0 3.08l8.5 4.25a2.3 2.3 0 0 0-.09.65 2.5 2.5 0 1 0 2.5-2.5m0-11.88a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5M5.56 13.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5m12.88 6.44a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5" data-name="Share 2" />
      </G>
    </Svg>
  );
};