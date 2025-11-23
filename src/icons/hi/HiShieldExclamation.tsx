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

export const HiShieldExclamation = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10 1.944A11.95 11.95 0 0 1 2.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7q-.001-1.024-.166-2.001A11.95 11.95 0 0 1 10 1.944M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-7a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};