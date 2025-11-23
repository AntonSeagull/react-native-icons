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

export const SiQlik = (props: IconProps) => {
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
        <Path d="m23.752 20.137-3.13-2.633a11.2 11.2 0 0 0 1.73-5.965C22.352 5.37 17.344.362 11.176.362S0 5.37 0 11.54s5.008 11.176 11.176 11.176c2.393 0 4.622-.756 6.444-2.044l3.333 2.799s.497.423.92-.074l1.989-2.357c-.019 0 .386-.497-.11-.902m-5.708-8.598a6.867 6.867 0 1 1-13.735 0 6.867 6.867 0 0 1 13.735 0m-11.287 0a4.4 4.4 0 1 1 8.8 0 4.4 4.4 0 0 1-8.8 0z" />
      </G>
    </Svg>
  );
};