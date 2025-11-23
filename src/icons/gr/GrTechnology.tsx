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

export const GrTechnology = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m.5 6 8-8M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M12 21l2-2" />
      </G>
    </Svg>
  );
};