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

export const LiaShekelSignSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7 5v22h2V7h1c3.879 0 7 3.121 7 7v7h2v-7c0-4.957-4.043-9-9-9Zm15 0v20h-1c-3.879 0-7-3.121-7-7v-7h-2v7c0 4.957 4.043 9 9 9h3V5Z" />
      </G>
    </Svg>
  );
};