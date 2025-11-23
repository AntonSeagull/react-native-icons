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

export const GiOden = (props: IconProps) => {
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
        <Path d="M480.2 31.81 351.5 50.26 461.7 160.5zm-92.7 79.99-13.1 13.1c2.3 1.8 4.6 3.8 6.7 5.9q3.3 3.3 6 6.9l13.2-13.2zm-58.1 15.5c-14 0-28.1 5.4-38.9 16.2-21.5 21.5-21.5 56.2 0 77.8 21.6 21.5 56.3 21.5 77.8 0 21.6-21.6 21.6-56.3 0-77.8-10.8-10.8-24.8-16.2-38.9-16.2m-127.1 82-32.6 32.5 100.5 100.5 32.5-32.6zm69.6 18-13.1 13.1 12.8 12.8 13.1-13.1c-2.4-1.9-4.7-3.9-6.9-6.1-2.1-2.1-4.1-4.4-5.9-6.7m-71 71.1-169.09 169 12.72 12.8L213.6 311.1z" />
      </G>
    </Svg>
  );
};