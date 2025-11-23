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

export const SiInfomaniak = (props: IconProps) => {
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
        <Path d="M2.4 0A2.395 2.395 0 0 0 0 2.4v19.2C0 22.93 1.07 24 2.4 24h19.2c1.33 0 2.4-1.07 2.4-2.4V2.4C24 1.07 22.93 0 21.6 0H10.112v11.712l3.648-4.128h6l-4.58 4.35 4.868 8.13h-5.52l-2.594-5.021-1.822 1.757v3.264H5.12V0Z" />
      </G>
    </Svg>
  );
};