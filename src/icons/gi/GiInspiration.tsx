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

export const GiInspiration = (props: IconProps) => {
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
        <Path d="m51.34 23.63-6.68 16.72 80.04 32.01 6.6-16.72zm409.36.01-80 32 6.6 16.72 80-32zM256 25c-29 0-50 14.08-64.7 34.29C176.6 79.51 169 106 169 128c0 13 7 27.8 14.5 39s14.9 18.6 14.9 18.6l1.5 1.5 9.3 27.9H228L194.7 98.07 256 118.5l61.3-20.43L284 215h18.8l9.3-27.9 1.5-1.5s7.4-7.4 14.9-18.6 14.5-26 14.5-39c0-22-7.6-48.49-22.3-68.71C306 39.08 285 25 256 25m128 94v18h96v-18zm-352 .1v18h96v-18zm189.3 6.8 25.5 89.1h18.4l25.5-89.1-34.7 11.6zm166 57.7-6.6 16.8 80 32 6.6-16.8zm-262.6.1-80.04 32 6.68 16.8 79.96-32zM217 233v14h78v-14zm0 32v14h78v-14zm-46.9 2.6c-27.1.5-52.6 5-66.9 11.1L29.8 484.1c71.1-14.1 143.9-26 217.2-.9V297h-48v-28.3c-7.9-.7-16-1.1-23.9-1.1zm166.8 0c-7.9 0-16 .4-23.9 1.1V297h-48v186.2c73.3-25.1 146.1-13.2 217.2.9l-73.4-205.4c-14.3-6.1-39.8-10.6-66.9-11.1z" />
      </G>
    </Svg>
  );
};