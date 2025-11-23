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

export const PiShieldChevronThin = (props: IconProps) => {
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
        <Path d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1 22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76 20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m-38.29 160.71A132.5 132.5 0 0 1 128 227.82a132.2 132.2 0 0 1-41.71-23.11A115.1 115.1 0 0 1 59.21 173L128 124.88 196.79 173a115.1 115.1 0 0 1-27.08 31.71M212 112c0 20-3.85 38-11.46 53.89l-70.25-49.17a4 4 0 0 0-4.58 0l-70.25 49.17C47.85 150 44 132 44 112V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};