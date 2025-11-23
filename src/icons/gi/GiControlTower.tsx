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

export const GiControlTower = (props: IconProps) => {
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
        <Path d="M352 21v18h39v16h18V39h39V21zm35 52-40 30h106l-40-30zM69.48 120.5l-8.96 15.6 110.98 63.7 35.6 20.4 33.6-58.7-77 13.1zM329 121v30h30v-30zm48 0v30h46v-30zm64 0v30h30v-30zm-103 48 34.5 46h55l34.5-46zm39 64v30h46v-30zm0 48v206h46V281zM68.52 329 34.3 375H359v-46zM25 393v94h30v-64h66v64h238v-94zm416 .5V487h46v-65.9zM160 439h48v18h-48zm96 0h48v18h-48zm-183 2v46h30v-46z" />
      </G>
    </Svg>
  );
};