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

export const PiGridNineBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M216 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-108 96v-24h40v24Zm40 24v24h-40v-24ZM44 116h40v24H44Zm64-24V68h40v24Zm64 24h40v24h-40Zm40-24h-40V68h40ZM84 68v24H44V68Zm-40 96h40v24H44Zm128 24v-24h40v24Z" />
      </G>
    </Svg>
  );
};