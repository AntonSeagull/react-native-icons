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

export const ImtNumbericDesc = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 12V0H3v12H.5L4 15.5 7.5 12zM13.5 16a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5M14.5 0h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H14v2h-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5M12 1h2v2h-2z" />
      </G>
    </Svg>
  );
};