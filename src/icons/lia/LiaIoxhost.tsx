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

export const LiaIoxhost = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 4C9.383 4 4 9.383 4 16c0 1.04.156 2.035.406 3H2c-.55 0-1 .45-1 1s.45 1 1 1h3.094c1.902 4.121 6.078 7 10.906 7 6.617 0 12-5.383 12-12 0-1.04-.156-2.035-.406-3H30c.55 0 1-.45 1-1s-.45-1-1-1h-3.094C25.004 6.879 20.828 4 16 4m0 2a9.95 9.95 0 0 1 8.656 5H11c-.55 0-1 .45-1 1s.45 1 1 1h14.563c.296.95.437 1.953.437 3 0 5.535-4.465 10-10 10a9.95 9.95 0 0 1-8.656-5H21c.55 0 1-.45 1-1s-.45-1-1-1H6.438A10 10 0 0 1 6 16c0-5.535 4.465-10 10-10m-5 9c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1Z" />
      </G>
    </Svg>
  );
};