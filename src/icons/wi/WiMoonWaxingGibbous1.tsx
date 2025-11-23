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

export const WiMoonWaxingGibbous1 = (props: IconProps) => {
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
        <Path d="M13.93 14.44c-.02 4.53.33 8.29 1.04 11.27 2.04.01 3.93-.49 5.65-1.49s3.1-2.36 4.11-4.08 1.52-3.61 1.53-5.65-.49-3.93-1.49-5.65q-1.5-2.595-4.08-4.11c-2.58-1.515-3.6-1.52-5.64-1.53-.73 3.71-1.11 7.46-1.12 11.24" />
      </G>
    </Svg>
  );
};