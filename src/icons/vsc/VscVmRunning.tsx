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

export const VscVmRunning = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M1.5 2h13l.5.5v5.503a5 5 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10z" clipRule="evenodd" />
        <Path d="M12 8q.55 0 1.063.14.51.141.953.407.44.265.808.625.367.36.63.808a4.03 4.03 0 0 1 .405 3.082q-.14.513-.406.954a4.4 4.4 0 0 1-.625.808q-.36.367-.808.63a4.03 4.03 0 0 1-3.082.405 3.8 3.8 0 0 1-.954-.406 4.4 4.4 0 0 1-.808-.625 3.8 3.8 0 0 1-.63-.808 4.03 4.03 0 0 1-.405-3.082q.14-.513.406-.954.265-.44.625-.808.36-.367.808-.63A4.03 4.03 0 0 1 12 8m2 3.988L11 10v4z" />
      </G>
    </Svg>
  );
};