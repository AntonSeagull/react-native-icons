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

export const GiGearStickPattern = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M82.64 48.26a51.94 51.94 0 0 0-51.68 51.94 51.94 51.94 0 0 0 42.2 50.9v209.7a51.94 51.94 0 0 0-42.2 51 51.94 51.94 0 0 0 51.94 51.9 51.94 51.94 0 0 0 51.9-51.9 51.94 51.94 0 0 0-42.15-51v-95.1H246.2v95.1a51.94 51.94 0 0 0-42.2 51 51.94 51.94 0 0 0 52 51.9 51.94 51.94 0 0 0 51.9-51.9 51.94 51.94 0 0 0-42.2-51v-95.1h173.1V151.1a51.94 51.94 0 0 0 42.2-50.9 51.94 51.94 0 0 0-51.9-51.94h-.2a51.94 51.94 0 0 0-51.7 51.94 51.94 51.94 0 0 0 42.2 50.9v95.1H265.7v-95.1a51.94 51.94 0 0 0 42.2-50.9A51.94 51.94 0 0 0 256 48.26h-.2A51.94 51.94 0 0 0 204 100.2a51.94 51.94 0 0 0 42.2 50.9v95.1H92.65v-95.1a51.94 51.94 0 0 0 42.15-50.9 51.94 51.94 0 0 0-51.9-51.94z" />
      </G>
    </Svg>
  );
};