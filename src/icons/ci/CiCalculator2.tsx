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

export const CiCalculator2 = (props: IconProps) => {
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
        <Path d="M20.45 7.83h-2.8v2.81a.5.5 0 0 1-1 0V7.83h-2.81a.5.5 0 0 1 0-1h2.81V4.02a.5.5 0 0 1 1 0v2.81h2.8a.5.5 0 0 1 0 1M3.545 7.83a.5.5 0 0 1 0-1h6.619a.5.5 0 0 1 0 1ZM13.836 16.05a.5.5 0 0 1 0-1h6.619a.5.5 0 0 1 0 1ZM13.836 20.191a.5.5 0 0 1 0-1h6.619a.5.5 0 0 1 0 1ZM9.55 19.61a.5.5 0 0 1-.71.7l-1.98-1.98c-.66.65-1.33 1.32-1.99 1.98a.5.5 0 0 1-.71-.7l1.99-1.99-1.99-1.99a.5.5 0 0 1 .71-.7l.58.58 1.4 1.4c.67-.66 1.33-1.32 1.99-1.98a.5.5 0 0 1 .71.7l-1.99 1.99Z" />
      </G>
    </Svg>
  );
};