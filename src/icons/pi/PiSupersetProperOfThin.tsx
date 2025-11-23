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

export const PiSupersetProperOfThin = (props: IconProps) => {
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
        <Path d="M220 128a84.09 84.09 0 0 1-84 84H64a4 4 0 0 1 0-8h72a76 76 0 0 0 0-152H64a4 4 0 0 1 0-8h72a84.09 84.09 0 0 1 84 84" />
      </G>
    </Svg>
  );
};