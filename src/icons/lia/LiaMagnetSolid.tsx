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

export const LiaMagnetSolid = (props: IconProps) => {
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
        <Path d="M16 5C9.938 5 5 9.938 5 16v11h8V16c0-1.668 1.332-3 3-3s3 1.332 3 3v11h8V16c0-6.062-4.937-11-11-11m0 2c4.984 0 9 4.016 9 9v5h-4v-5c0-2.75-2.25-5-5-5s-5 2.25-5 5v5H7v-5c0-4.984 4.016-9 9-9M7 23h4v2H7Zm14 0h4v2h-4Z" />
      </G>
    </Svg>
  );
};