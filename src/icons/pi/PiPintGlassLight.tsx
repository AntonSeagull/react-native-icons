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

export const PiPintGlassLight = (props: IconProps) => {
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
        <Path d="M204.49 28a6 6 0 0 0-4.49-2H56a6 6 0 0 0-6 6.71l23.16 193A14 14 0 0 0 87.1 238h81.8a14 14 0 0 0 13.9-12.33L206 32.71a6 6 0 0 0-1.51-4.71m-11.25 10-3.36 28H66.12l-3.36-28Zm-22.35 186.24a2 2 0 0 1-2 1.76H87.1a2 2 0 0 1-2-1.76L67.56 78h120.88Z" />
      </G>
    </Svg>
  );
};