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

export const VscMultipleWindows = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m6 1.5.5-.5h8l.5.5v7l-.5.5H12V8h2V4H7v1H6zM7 2v1h7V2zM1.5 7l-.5.5v7l.5.5h8l.5-.5v-7L9.5 7zM2 9V8h7v1zm0 1h7v4H2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};