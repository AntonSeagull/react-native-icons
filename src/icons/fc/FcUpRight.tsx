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

export const FcUpRight = (props: IconProps) => {
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
        <Path fill="#3F51B5" d="M44 19 30 30.7V7.3z" />
        <Path fill="#3F51B5" d="M6 27v13h8V27c0-2.2 1.8-4 4-4h17v-8H18c-6.6 0-12 5.4-12 12" />
        <Path fill="#3F51B5" d="M44 19 30 30.7V7.3z" />
        <Path fill="#3F51B5" d="M6 27v13h8V27c0-2.2 1.8-4 4-4h17v-8H18c-6.6 0-12 5.4-12 12" />
      </G>
    </Svg>
  );
};