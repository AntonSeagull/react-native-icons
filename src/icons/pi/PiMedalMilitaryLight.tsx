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

export const PiMedalMilitaryLight = (props: IconProps) => {
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
        <Path d="M207 42H49a15 15 0 0 0-15 15v49.21a15 15 0 0 0 8.79 13.65l66.4 30.14a46 46 0 1 0 37.62 0l66.4-30.18a15 15 0 0 0 8.79-13.61V57a15 15 0 0 0-15-15m-45 12v76l-34 15.45L94 130V54ZM46 106.21V57a3 3 0 0 1 3-3h33v70.5l-34.24-15.56a3 3 0 0 1-1.76-2.73M162 192a34 34 0 1 1-34-34 34 34 0 0 1 34 34m48-85.79a3 3 0 0 1-1.76 2.73L174 124.5V54h33a3 3 0 0 1 3 3Z" />
      </G>
    </Svg>
  );
};