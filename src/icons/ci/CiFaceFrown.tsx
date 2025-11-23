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

export const CiFaceFrown = (props: IconProps) => {
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
        <Path d="M12 21.942A9.942 9.942 0 1 1 21.942 12 9.953 9.953 0 0 1 12 21.942m0-18.884A8.942 8.942 0 1 0 20.942 12 8.95 8.95 0 0 0 12 3.058" />
        <Path d="M17.206 16.481a6.033 6.033 0 0 0-10.412 0 .5.5 0 0 0 .863.5 5.033 5.033 0 0 1 8.685 0 .5.5 0 0 0 .864-.5" />
        <Circle cx={9} cy={9.011} r={1.25} />
        <Circle cx={15} cy={9.011} r={1.25} />
      </G>
    </Svg>
  );
};