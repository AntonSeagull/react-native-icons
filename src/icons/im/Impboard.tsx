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

export const Impboard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14.5 2H10a2 2 0 1 0-4 0H1.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5M8 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 14H2V3h2v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3h2z" />
        <Path d="M7 13.414 3.793 9.707l.914-.914L7 10.586l4.293-3.793.914.914z" />
      </G>
    </Svg>
  );
};