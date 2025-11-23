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

export const GiChainedArrowHeads = (props: IconProps) => {
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
        <Path d="M97.53 20.705v.002l6.425 82.932-86.434-6.427v53.73l207.912 74.754L151.26 20.705zm-80.01.002v31.537l54.9 19.858-18.69-51.395zM237.366 45.21l15.754 207.743L45.374 237.2l300.363 108.374L237.368 45.21h-.003zm117.342 171.927.002.008v-.008h-.003zm.002.008 11.272 148.67-148.68-11.272 214.968 77.562zm87.493 137.65.002.008v-.008zm.002.008 7.158 94.396-94.404-7.16 136.49 49.247z" />
      </G>
    </Svg>
  );
};