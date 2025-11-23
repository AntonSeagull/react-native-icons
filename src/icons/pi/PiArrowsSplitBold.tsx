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

export const PiArrowsSplitBold = (props: IconProps) => {
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
        <Path d="m232.49 192.49-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L180 187v-46l-52-52-52 52v46l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L52 187v-51a12 12 0 0 1 3.51-8.49L116 67V24a12 12 0 0 1 24 0v43l60.49 60.48A12 12 0 0 1 204 136v51l11.51-11.52a12 12 0 0 1 17 17Z" />
      </G>
    </Svg>
  );
};