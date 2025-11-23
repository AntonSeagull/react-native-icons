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

export const SiSteinberg = (props: IconProps) => {
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
        <Path d="M19.48 12.63c.643-.372.643-1.01 0-1.38l-4.769-2.755c-.642-.37-1.195-.052-1.195.69v5.508c0 .742.553 1.06 1.195.69zM12 2.724a9.275 9.275 0 1 1-.001 18.55 9.275 9.275 0 0 1 0-18.55M12 0C5.384 0 .002 5.383.002 12s5.382 12 12 12S24 18.617 24 12 18.617 0 12 0" />
      </G>
    </Svg>
  );
};