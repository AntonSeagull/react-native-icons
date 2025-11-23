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

export const GiBottomRight3dArrow = (props: IconProps) => {
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
        <Path d="m126.47 18.25 273.81 229.344 39.314-39.313 23.47 205.095-205.095-23.438 37.467-37.468L20.594 58.655v99.28l195.25 235.126 5.437 6.532-6.03 6.03-45.97 45.97 323.033 38.344-38.375-323-48.313 48.312-6 6-6.563-5.438L155.032 18.25z" />
      </G>
    </Svg>
  );
};