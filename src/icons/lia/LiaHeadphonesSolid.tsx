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

export const LiaHeadphonesSolid = (props: IconProps) => {
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
        <Path d="M16 5C9.938 5 5 9.938 5 16v8c0 1.645 1.355 3 3 3h3v-9H7v-2c0-4.984 4.016-9 9-9s9 4.016 9 9v2h-4v9h3c1.645 0 3-1.355 3-3v-8c0-6.062-4.937-11-11-11M7 20h2v5H8c-.566 0-1-.434-1-1Zm16 0h2v4c0 .566-.434 1-1 1h-1Z" />
      </G>
    </Svg>
  );
};