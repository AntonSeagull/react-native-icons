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

export const IoImagesSharp = (props: IconProps) => {
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
        <Ellipse cx={373.14} cy={219.33} rx={46.29} ry={46} style={{
        fill: "none"
        }} />
        <Path d="M80 132v328a20 20 0 0 0 20 20h392a20 20 0 0 0 20-20V132a20 20 0 0 0-20-20H100a20 20 0 0 0-20 20m293.14 41.33a46 46 0 1 1-46.28 46 46.19 46.19 0 0 1 46.28-46m-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33Zm368.27 0H259l144.58-144L480 370.59Z" />
        <Path d="M20 32A20 20 0 0 0 0 52v344a20 20 0 0 0 20 20h28V100a20 20 0 0 1 20-20h380V52a20 20 0 0 0-20-20Z" />
      </G>
    </Svg>
  );
};