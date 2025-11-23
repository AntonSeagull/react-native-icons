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

export const PiTagThin = (props: IconProps) => {
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
        <Path d="m240.49 138.83-99.32-99.32a11.93 11.93 0 0 0-8.48-3.51H40a4 4 0 0 0-4 4v92.69a11.93 11.93 0 0 0 3.51 8.48l99.32 99.32a12 12 0 0 0 17 0l84.69-84.69a12 12 0 0 0 0-17Zm-5.66 11.31-84.69 84.69a4 4 0 0 1-5.65 0l-99.32-99.32a4 4 0 0 1-1.17-2.82V44h88.69a4 4 0 0 1 2.82 1.17l99.32 99.32a4 4 0 0 1 0 5.65M92 84a8 8 0 1 1-8-8 8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};