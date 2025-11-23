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

export const LiaSave = (props: IconProps) => {
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
        <Path d="M5 5v22h22V9.594l-.281-.313-4-4L22.406 5Zm2 2h3v6h12V7.438l3 3V25h-2v-9H9v9H7Zm5 0h4v2h2V7h2v4h-8Zm-1 11h10v7H11Z" />
      </G>
    </Svg>
  );
};