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

export const PiArticleNyTimesLight = (props: IconProps) => {
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
        <Path d="M128 98h104a6 6 0 0 1 0 12H128a6 6 0 0 1 0-12m104 32H128a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12m0 32H80a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12M96 142a6 6 0 0 0 0-12H86V62h36v10a6 6 0 0 0 12 0V56a6 6 0 0 0-6-6H32a6 6 0 0 0-6 6v16a6 6 0 0 0 12 0V62h36v68H64a6 6 0 0 0 0 12Z" />
      </G>
    </Svg>
  );
};