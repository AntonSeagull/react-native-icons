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

export const PiCurrencyKrwLight = (props: IconProps) => {
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
        <Path d="M240 130h-25.09l22.65-55.74a6 6 0 0 0-11.12-4.52L202 130h-44l-24.44-60.26a6 6 0 0 0-11.12 0L98 130H54L29.56 69.74a6 6 0 1 0-11.12 4.52L41.09 130H16a6 6 0 0 0 0 12h30l24.48 60.26a6 6 0 0 0 11.12 0L106 142h44l24.48 60.26a6 6 0 0 0 11.12 0L210 142h30a6 6 0 0 0 0-12M76 184.06 58.91 142h34.18ZM110.91 130 128 87.94 145.09 130ZM180 184.06 162.91 142h34.18Z" />
      </G>
    </Svg>
  );
};