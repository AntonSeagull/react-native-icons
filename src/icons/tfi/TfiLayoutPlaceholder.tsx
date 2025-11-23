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

export const TfiLayoutPlaceholder = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M.021 1.012v15h17v-15zm8.116 7.497-7.116 6.197V2.294zM1.459 2.012h14.138L8.518 8.177zm7.058 6.829 7.066 6.171H1.431zm.381-.332 7.123-6.204V14.73z" />
      </G>
    </Svg>
  );
};