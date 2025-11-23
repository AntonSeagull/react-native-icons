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

export const LiaXRaySolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v22h22V5Zm2 2h18v18H7Zm8 1v1h-3v2h3v1h-5v2h5v1h-4v2h4v2.563c-.523-.27-1.113-.563-1.5-.563a1.5 1.5 0 0 0 0 3c.379 0 1.672 1 2.5 1s2.121-1 2.5-1a1.5 1.5 0 0 0 0-3c-.387 0-.977.293-1.5.563V8Zm3 1v2h2V9Zm0 3v2h4v-2Zm0 3v2h3v-2Z" />
      </G>
    </Svg>
  );
};