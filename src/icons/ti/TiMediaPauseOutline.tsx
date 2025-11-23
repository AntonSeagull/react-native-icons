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

export const TiMediaPauseOutline = (props: IconProps) => {
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
        <Path d="M8 20c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3M8 7c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1m7 13c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3m0-13c-.552 0-1 .449-1 1v9a1.001 1.001 0 0 0 2 0V8c0-.551-.448-1-1-1" />
      </G>
    </Svg>
  );
};