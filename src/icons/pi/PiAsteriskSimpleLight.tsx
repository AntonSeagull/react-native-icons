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

export const PiAsteriskSimpleLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m210.23 101.57-72.6 29 51.11 65.71a6 6 0 0 1-9.48 7.36L128 137.77l-51.26 65.91a6 6 0 1 1-9.48-7.36l51.11-65.71-72.6-29a6 6 0 1 1 4.46-11.14L122 119.14V40a6 6 0 0 1 12 0v79.14l71.77-28.71a6 6 0 1 1 4.46 11.14" />
      </G>
    </Svg>
  );
};