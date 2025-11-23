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

export const SiPlatzi = (props: IconProps) => {
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
        <Path d="M10.64 1.127 2.485 9.282a3.84 3.84 0 0 0 0 5.436l8.155 8.155a3.84 3.84 0 0 0 5.436 0l2.72-2.718-2.72-2.718-2.718 2.718L5.203 12l8.155-8.155 5.437 5.437-5.437 5.436 2.718 2.72L21.513 12a3.84 3.84 0 0 0 0-5.437l-5.448-5.436a3.83 3.83 0 0 0-5.425 0z" />
      </G>
    </Svg>
  );
};