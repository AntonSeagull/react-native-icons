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

export const PiScribbleLight = (props: IconProps) => {
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
        <Path d="M204.25 188.24a16.63 16.63 0 0 0 0 23.52 6 6 0 1 1-8.48 8.48 28.61 28.61 0 0 1 0-40.48l9.37-9.38a16.63 16.63 0 0 0-23.52-23.51l-66.75 66.75a28.63 28.63 0 0 1-40.49-40.49l98.76-98.75a16.63 16.63 0 0 0-23.52-23.51l-66.76 66.75a28.63 28.63 0 0 1-40.49-40.49l41.38-41.37a6 6 0 1 1 8.49 8.48L50.86 85.62a16.63 16.63 0 0 0 23.52 23.51l66.75-66.75a28.63 28.63 0 0 1 40.49 40.49l-98.76 98.75a16.63 16.63 0 0 0 23.52 23.51l66.76-66.75a28.63 28.63 0 0 1 40.49 40.49Z" />
      </G>
    </Svg>
  );
};