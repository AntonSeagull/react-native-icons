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

export const LiaTengeSolid = (props: IconProps) => {
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
        <Path d="M6.633 5A.625.625 0 0 0 6 5.621v2.746c0 .348.285.633.633.633h18.746A.625.625 0 0 0 26 8.367V5.621A.616.616 0 0 0 25.379 5zm0 7a.63.63 0 0 0-.633.621v2.746c0 .348.285.633.633.633H14v11.379c0 .347.274.621.621.621h2.758a.616.616 0 0 0 .621-.621V16h7.379a.625.625 0 0 0 .621-.633v-2.746a.62.62 0 0 0-.621-.621z" />
      </G>
    </Svg>
  );
};