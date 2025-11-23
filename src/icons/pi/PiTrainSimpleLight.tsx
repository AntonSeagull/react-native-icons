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

export const PiTrainSimpleLight = (props: IconProps) => {
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
        <Path d="M184 26H72a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h12l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h12a30 30 0 0 0 30-30V56a30 30 0 0 0-30-30M72 38h112a18 18 0 0 1 18 18v66H54V56a18 18 0 0 1 18-18m112 164H72a18 18 0 0 1-18-18v-50h148v50a18 18 0 0 1-18 18m-2-30a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-88 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10" />
      </G>
    </Svg>
  );
};