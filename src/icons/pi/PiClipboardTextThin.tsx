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

export const PiClipboardTextThin = (props: IconProps) => {
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
        <Path d="M164 152a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4-36H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-68v168a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h38.08a44 44 0 0 1 67.84 0H200a12 12 0 0 1 12 12M92 64v4h72v-4a36 36 0 0 0-72 0m112-16a4 4 0 0 0-4-4h-32.83A43.7 43.7 0 0 1 172 64v8a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-8a43.7 43.7 0 0 1 4.83-20H56a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4Z" />
      </G>
    </Svg>
  );
};