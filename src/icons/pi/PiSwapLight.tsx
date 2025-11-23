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

export const PiSwapLight = (props: IconProps) => {
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
        <Path d="M222 48v104a14 14 0 0 1-14 14H94.49l13.75 13.76a6 6 0 1 1-8.48 8.48l-24-24a6 6 0 0 1 0-8.48l24-24a6 6 0 0 1 8.48 8.48L94.49 154H208a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0v-8a14 14 0 0 1 14-14h112a14 14 0 0 1 14 14m-54 146a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V104a2 2 0 0 1 2-2h113.51l-13.75 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L161.51 90H48a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};