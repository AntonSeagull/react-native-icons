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

export const GiDiamondRing = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m191.02 25.346-22.9 34.35h30.714l22.9-34.35zm52.347 0-22.898 34.35h71.06l-22.897-34.35zm46.9 0 22.9 34.35h30.714l-22.9-34.35zm-117.234 52.35 50.115 50.115-25.058-50.115zm45.182 0L256 153.265l37.785-75.57h-75.57zm95.695 0-25.058 50.115 50.115-50.115zm-134.435 31.898C109.163 139.5 59.693 209.29 59.693 290.348c0 108.185 88.122 196.306 196.307 196.306s196.307-88.12 196.307-196.306c0-81.057-49.47-150.848-119.782-180.754l-30.517 30.517c64.397 19.592 111.037 79.292 111.037 150.238 0 86.966-70.08 157.045-157.045 157.045-86.966 0-157.045-70.08-157.045-157.045 0-70.946 46.64-130.646 111.037-150.237l-30.517-30.516z" />
      </G>
    </Svg>
  );
};