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

export const PiMicroscopeLight = (props: IconProps) => {
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
        <Path d="M224 210h-24.47A85.2 85.2 0 0 0 222 152a86.1 86.1 0 0 0-80-85.77V32a14 14 0 0 0-14-14H80a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V78.26A74 74 0 0 1 182 210H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12m-94-74a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2V32a2 2 0 0 1 2-2h48a2 2 0 0 1 2 2Zm-58 46a6 6 0 0 1 0-12h64a6 6 0 0 1 0 12Z" />
      </G>
    </Svg>
  );
};