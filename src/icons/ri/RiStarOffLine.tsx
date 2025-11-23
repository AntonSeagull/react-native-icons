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

export const RiStarOffLine = (props: IconProps) => {
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
        <Path d="m23.413 8.792-5.392 4.986-1.415-1.415 2.266-2.096-4.833-.573-2.038-4.419-.784 1.699L9.71 5.467 12 .5l3.386 7.34zM8.46 9.872l-3.33.395 3.573 3.305-.948 4.773L12 15.968l4.246 2.377-.17-.854zm10.163 10.164.432 2.172-7.053-3.948-7.054 3.948 1.575-7.928L.588 8.792l6.07-.72-5.264-5.264 1.414-1.415 19.8 19.8-1.415 1.414z" />
      </G>
    </Svg>
  );
};