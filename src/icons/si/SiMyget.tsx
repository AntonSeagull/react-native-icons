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

export const SiMyget = (props: IconProps) => {
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
        <Path d="M11.96 0 1.1 4.34v14.28L11.9 24l11-5.38V13.8h-3.2v2.87l-7.8 3.83-7.64-3.83V8.02l7.64 3.72 10.8-5.6Zm-.24 3.53L16.02 6l-4.15 2.17-5.22-2.56Z" />
      </G>
    </Svg>
  );
};