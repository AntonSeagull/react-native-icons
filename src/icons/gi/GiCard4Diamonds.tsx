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

export const GiCard4Diamonds = (props: IconProps) => {
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
        <Path d="M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5zm26.882 3.717h.002l47.393 58.27-47.393 58.286-47.375-58.287 47.373-58.27zm124.436 139.908h7.726v112.453h27.34v10.104h-27.34v25.32q0 3.328 2.616 5.35 3.804 2.733 8.797 2.734h10.103v8.914h-65.975v-8.914h12.245q6.181 0 9.035-2.615 2.97-2.616 2.97-7.608v-23.181h-67.28v-11.41zM258.27 211.84l-57.414 80.238h57.414zm107.39 140.683zl47.393 58.27-47.393 58.287-47.375-58.287 47.373-58.27z" />
      </G>
    </Svg>
  );
};