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

export const RiPantoneLine = (props: IconProps) => {
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
        <Path d="m5.765 8-.296-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302zM8 19h2.209L8 13.533zm-2-6.244-1.673 4.141L6 17.608zm1.698-5.309 4.87 12.054 7.418-2.997-4.87-12.053zm2.979 2.033a1 1 0 1 1-.75-1.855 1 1 0 0 1 .75 1.855" />
      </G>
    </Svg>
  );
};