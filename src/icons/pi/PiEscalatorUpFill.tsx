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

export const PiEscalatorUpFill = (props: IconProps) => {
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
        <Path d="M240 56v40a16 16 0 0 1-16 16h-36.5L93.88 213.43A8 8 0 0 1 88 216H32a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h36.5l93.62-101.43A8 8 0 0 1 168 40h56a16 16 0 0 1 16 16m-34.34 90.34a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L192 171.31V208a8 8 0 0 0 16 0v-36.69l10.34 10.35a8 8 0 0 0 11.32-11.32Z" />
      </G>
    </Svg>
  );
};