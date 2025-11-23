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

export const CiLocationArrow1 = (props: IconProps) => {
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
        <Path d="M14.472 20.937a1.44 1.44 0 0 1-1.3-.812L10.3 14.343a1.42 1.42 0 0 0-.642-.641l-5.784-2.871a1.462 1.462 0 0 1 .186-2.695l14.952-5a1.46 1.46 0 0 1 1.849 1.847l-5 14.952a1.44 1.44 0 0 1-1.284.994.5.5 0 0 1-.105.008m5.007-16.874a.5.5 0 0 0-.149.024l-14.952 5a.46.46 0 0 0-.058.849l5.78 2.869a2.44 2.44 0 0 1 1.1 1.095l2.87 5.782a.44.44 0 0 0 .445.255.45.45 0 0 0 .4-.312l5-14.953a.462.462 0 0 0-.433-.607Z" data-name="Location Arrow 1" />
      </G>
    </Svg>
  );
};