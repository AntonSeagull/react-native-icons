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

export const GiAbstract068 = (props: IconProps) => {
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
        <Path d="M21 21v70.5c90.856 0 164.5 73.645 164.5 164.5S111.855 420.5 21 420.5V491h470v-70.5c-90.855 0-164.5-73.645-164.5-164.5S400.145 91.5 491 91.5V21zm235 43.475c18.872 0 34.075 15.203 34.075 34.075v314.9c0 18.872-15.203 34.075-34.075 34.075s-34.075-15.203-34.075-34.075V98.55c0-18.872 15.203-34.075 34.075-34.075M21 134.681V377.32c66.995 0 121.319-54.325 121.319-121.32S87.995 134.682 21 134.682m470 0c-66.994 0-121.319 54.324-121.319 121.319S424.006 377.319 491 377.319z" />
      </G>
    </Svg>
  );
};