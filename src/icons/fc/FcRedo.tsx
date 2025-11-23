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

export const FcRedo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M43 18 29 6.3v23.4z" />
        <Path d="M20 14h12v8H20c-2.8 0-5 2.2-5 5s2.2 5 5 5h3v8h-3c-7.2 0-13-5.8-13-13s5.8-13 13-13" />
      </G>
    </Svg>
  );
};