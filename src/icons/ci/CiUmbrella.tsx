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

export const CiUmbrella = (props: IconProps) => {
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
        <Path d="M12.5 4.06v-.5a.5.5 0 0 0-.15-.35.483.483 0 0 0-.7 0 .5.5 0 0 0-.15.35v.5a8.41 8.41 0 0 0-7.88 7.82.98.98 0 0 0 .27.74 1.03 1.03 0 0 0 .74.32h6.87v5.22a1.65 1.65 0 0 1-.62 1.54 1.528 1.528 0 0 1-2.38-1.16.5.5 0 0 0-1 0 2.433 2.433 0 0 0 2.43 2.4 2.45 2.45 0 0 0 2.57-2.29c.08-1.39 0-2.81 0-4.2v-1.51h6.87a1.03 1.03 0 0 0 .74-.32.98.98 0 0 0 .27-.74 8.41 8.41 0 0 0-7.88-7.82m6.87 7.88-14.75.01a7.4 7.4 0 0 1 14.76-.02c0 .01 0 .01-.01.01" />
      </G>
    </Svg>
  );
};