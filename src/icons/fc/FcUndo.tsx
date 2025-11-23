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

export const FcUndo = (props: IconProps) => {
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
        <Path d="M5 18 19 6.3v23.4z" />
        <Path d="M28 14H16v8h12c2.8 0 5 2.2 5 5s-2.2 5-5 5h-3v8h3c7.2 0 13-5.8 13-13s-5.8-13-13-13" />
      </G>
    </Svg>
  );
};