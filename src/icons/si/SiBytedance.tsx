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

export const SiBytedance = (props: IconProps) => {
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
        <Path d="M19.877 1.469 24 2.532v18.942l-4.123 1.056zM6.53 10.897l4.115 1.064v8.978L6.53 22.003zM0 2.572l4.115 1.064v16.736L0 21.428zm17.455 5.62V19.3l-4.122-1.065V9.257z" />
      </G>
    </Svg>
  );
};