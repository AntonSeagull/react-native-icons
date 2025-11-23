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

export const TbCardboardsFilled = (props: IconProps) => {
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
        <Path d="M19 5a3 3 0 0 1 3 3v8.5a3.5 3.5 0 0 1-3.5 3.5h-1.062a4 4 0 0 1-3.118-1.504l-1.54-1.92a1 1 0 0 0-1.56 0l-1.538 1.917A4 4 0 0 1 6.56 20H5.5A3.5 3.5 0 0 1 2 16.5V8a3 3 0 0 1 3-3zM8 10a2 2 0 0 0-1.995 1.85L6 12a2 2 0 1 0 2-2m8 0a2 2 0 0 0-1.995 1.85L14 12a2 2 0 1 0 2-2" />
      </G>
    </Svg>
  );
};