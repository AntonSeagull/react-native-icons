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

export const RiWindowsLine = (props: IconProps) => {
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
        <Path d="M21.001 2.5v19l-18-2v-15zm-2 10.499-7 .001v5.487l7 .779zm-14 4.71 5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265-5 .556V11l5 .001z" />
      </G>
    </Svg>
  );
};