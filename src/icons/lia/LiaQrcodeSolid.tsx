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

export const LiaQrcodeSolid = (props: IconProps) => {
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
        <Path d="M5 5v8h2v2h2v-2h4V5Zm8 8v2h2v2h-4v2H5v8h8v-8h6v-2h-2v-2h4v-2h2v2h2v-2h2V5h-8v8Zm12 2v2h2v-2Zm0 2h-2v2h2Zm0 2v2h2v-2Zm0 2h-2v-2h-2v2h-5v6h2v-4h4v2h2v-2h1Zm-3 4h-2v2h2Zm1-8v-2h-2v2Zm-12 0v-2H9v2Zm-4-2H5v2h2Zm8-10v4h-1v2h1v1h2V9h1V7h-1V5ZM7 7h4v4H7Zm14 0h4v4h-4ZM8 8v2h2V8Zm14 0v2h2V8ZM7 21h4v4H7Zm1 1v2h2v-2Zm17 3v2h2v-2Z" />
      </G>
    </Svg>
  );
};