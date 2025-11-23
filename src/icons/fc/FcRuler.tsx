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

export const FcRuler = (props: IconProps) => {
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
        <Path fill="#FFA000" d="M13.324 45.003 3.002 34.68 34.676 3.007 44.998 13.33z" />
        <Path d="m22.803 24.188-4.666-4.666 1.414-1.414 4.666 4.666zM24.813 18.198l-2.616-2.616 1.414-1.414 2.616 2.616zM30.804 16.188l-4.666-4.666 1.414-1.414 4.666 4.666zM30.156 7.543l1.414-1.414 2.615 2.616-1.414 1.414zM8.81 34.198l-2.616-2.616 1.414-1.414 2.616 2.616zM14.801 32.188l-4.666-4.666 1.414-1.414 4.666 4.666zM16.812 26.198l-2.616-2.616 1.414-1.414 2.616 2.616z" />
      </G>
    </Svg>
  );
};