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

export const FaFontAwesomeFlag = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 224, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M448 48v336c-63 23-82 32-119 32-63 0-87-32-150-32-20 0-36 4-51 8v-64c15-4 31-8 51-8 63 0 87 32 150 32 20 0 35-3 55-9V135c-20 6-35 9-55 9-63 0-87-32-150-32-51 0-75 21-115 29v307a31.6 31.6 0 0 1-32 32 31.6 31.6 0 0 1-32-32V64a31.6 31.6 0 0 1 32-32 31.6 31.6 0 0 1 32 32v13c40-8 64-29 115-29 63 0 87 32 150 32 37 0 56-9 119-32" />
      </G>
    </Svg>
  );
};