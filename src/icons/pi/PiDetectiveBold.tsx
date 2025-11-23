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

export const PiDetectiveBold = (props: IconProps) => {
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
        <Path d="M244 104h-24.79l-43.39-59.76a20 20 0 0 0-31.61-.94l-12.82 14.86c-.1.11-.2.23-.29.35a4 4 0 0 1-6.2 0c-.09-.12-.19-.24-.29-.35L111.79 43.3a20 20 0 0 0-31.61.94L36.79 104H12a12 12 0 0 0 0 24h232a12 12 0 0 0 0-24M96.62 62.45l9.69 11.24a28 28 0 0 0 43.38 0l9.69-11.24L189.55 104H66.45ZM180 140a40.07 40.07 0 0 0-38.16 28h-27.68a40 40 0 1 0 0 24h27.68A40 40 0 1 0 180 140M76 196a16 16 0 1 1 16-16 16 16 0 0 1-16 16m104 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  );
};