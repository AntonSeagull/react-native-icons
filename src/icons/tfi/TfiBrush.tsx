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

export const TfiBrush = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m15.913 1.782-6.5 9.5-.825-.564 6.5-9.5zM9 13.992c0 1.103-.897 2-2 2-.203 0-.538.015-.541.015H1.005l4.553-3.431c.15-.104.859-.584 1.442-.584 1.103 0 2 .897 2 2m-1 0c0-.551-.449-1-1-1-.175 0-.582.203-.853.393l-2.153 1.623h2.433c.063-.003.376-.016.573-.016.551 0 1-.449 1-1" />
      </G>
    </Svg>
  );
};