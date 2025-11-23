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

export const GiSuicide = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M241 16a15 15 0 0 0-15 15v60h-15a15 15 0 0 0-15 15v90a15 15 0 0 0 13.844 14.938C158.366 301.06 106 326.67 106 361c0 90 72.837 135 150 135s150-45 150-135c0-34.326-52.37-59.927-103.844-150.03A15 15 0 0 0 316 196v-90a15 15 0 0 0-15-15h-15V31a15 15 0 0 0-15-15zm15 210c15 45 90 120 90 135 0 45-45.033 90-90 90-45.033 0-90-45-90-90 0-15 75-90 90-135" />
      </G>
    </Svg>
  );
};