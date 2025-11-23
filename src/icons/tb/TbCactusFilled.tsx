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

export const TbCactusFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7 22a1 1 0 0 1-.117-1.993L7 20h2v-6a4 4 0 0 1-3.995-3.8L5 10V9a1 1 0 0 1 1.993-.117L7 9v1a2 2 0 0 0 1.85 1.995L9 12V5a3 3 0 0 1 5.995-.176L15 5v10a2 2 0 0 0 1.995-1.85L17 13V8a1 1 0 0 1 1.993-.117L19 8v5a4 4 0 0 1-3.8 3.995L15 17v3h2a1 1 0 0 1 .117 1.993L17 22z" />
      </G>
    </Svg>
  );
};