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

export const TfiFacebook = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m12.461 5.57-.309 2.93H9.81V17H6.292V8.5H4.539V5.57h1.753V3.806C6.292 1.423 7.283 0 10.1 0h2.341v2.93h-1.465c-1.093 0-1.166.413-1.166 1.176V5.57z" />
      </G>
    </Svg>
  );
};