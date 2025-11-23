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

export const SiMaas = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 0C5.383 0 0 5.384 0 12s5.383 12 12 12 12-5.384 12-12S18.617 0 12 0M6.343 6.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.515-.515v-.685c0-.284.23-.515.515-.515m0 3.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.515-.515v-.685c0-.284.23-.515.515-.515m0 3.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.514-.515v-.685c0-.284.23-.515.514-.515m0 3.258h11.314c.284 0 .514.23.514.513v.687c0 .284-.23.515-.514.515H6.343a.515.515 0 0 1-.514-.515v-.687c0-.284.23-.513.514-.513" />
      </G>
    </Svg>
  );
};