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

export const LiaAppStoreIos = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm8.992 2.01a.3.3 0 0 0-.224.031c-.154.082-.238.268-.166.422.484 1.132 2.181 5.033 3.601 7.658l1.318-.71c-1.347-2.616-3.684-6.247-4.343-7.266a.3.3 0 0 0-.186-.135m-.744 2.254a.87.87 0 0 0-.875.422l1.514.894a.92.92 0 0 0-.32-1.223c-.104-.05-.216-.072-.319-.093m-1 .638-.812 1.391 1.544.863.782-1.347zm-.904 1.543-3.211 5.6 1.513.875 3.211-5.568zM9 15v2h1.93l1.17-2zm5.84 0-1.15 2h5.08c-.28-.55-.71-1.41-1-2zm5.29 0c.25.46.58 1.09.68 1.29.02.02.08.14.1.18l.22.53H23v-2zm.495 1.605-1.316.711.988 1.543 1.027-.586zm.803 1.926-.967.516 1.027 2.45c.185.431.68.637 1.092.411a.81.81 0 0 0 .29-1.154zm-11.43.71-.545 2.605.135.06 1.955-1.77z" />
      </G>
    </Svg>
  );
};