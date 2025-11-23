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

export const RiTakeawayLine = (props: IconProps) => {
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
        <Path d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001 2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12-.001a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1.148-7H17V12a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4 4 0 0 1 4.57-2.94zM9 8H4v3h5zm11-3h-3v2h3zM9 5H4v1h5z" />
      </G>
    </Svg>
  );
};