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

export const TfiSplitV = (props: IconProps) => {
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
        <Path d="m10.646 13.146.707.707L8.5 16.707l-2.854-2.854.707-.707L8 14.793v-3.772h1v3.772zM8 2.207v3.772h1V2.207l1.646 1.646.707-.707L8.5.293 5.646 3.146l.707.707zM0 8v1h17V8z" />
      </G>
    </Svg>
  );
};