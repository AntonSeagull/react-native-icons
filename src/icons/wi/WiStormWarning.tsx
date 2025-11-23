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

export const WiStormWarning = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.76 24.6V7.45h1.13V24.6zm1.94-10.55v-6.6h8.55v6.6zm2.36-2h3.81v-2.5h-3.81z" />
      </G>
    </Svg>
  );
};