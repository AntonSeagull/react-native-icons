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

export const FaFlushed = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 496 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 248, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M344 200c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24m-192 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8M80 224c0-39.8 32.2-72 72-72s72 32.2 72 72-32.2 72-72 72-72-32.2-72-72m232 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32m32-104c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72" />
      </G>
    </Svg>
  );
};