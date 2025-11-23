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

export const SiNewrelic = (props: IconProps) => {
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
        <Path d="M8.002 14.31v7.383L12 24V12L1.608 6v4.616ZM12 0 2.823 5.298l3.998 2.308L12 4.616l6.393 3.692v7.384l-5.178 2.99V23.3l9.176-5.3V6Z" />
      </G>
    </Svg>
  );
};