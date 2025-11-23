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

export const PiClockUserLight = (props: IconProps) => {
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
        <Path d="M134 72v46.29l39.32-19.66a6 6 0 0 1 5.36 10.74l-48 24A6 6 0 0 1 122 128V72a6 6 0 0 1 12 0m-6 146a90 90 0 1 1 90-90 6 6 0 0 0 12 0 102 102 0 1 0-102 102 6 6 0 0 0 0-12m101.8 4.46a6 6 0 0 1-11.6 3.08C215.14 214 204.37 206 192 206s-23.14 8-26.2 19.54A6 6 0 0 1 160 230a6.3 6.3 0 0 1-1.54-.2 6 6 0 0 1-4.26-7.34A38.1 38.1 0 0 1 172.72 199a30 30 0 1 1 38.56 0 38.1 38.1 0 0 1 18.52 23.46M174 176a18 18 0 1 0 18-18 18 18 0 0 0-18 18" />
      </G>
    </Svg>
  );
};