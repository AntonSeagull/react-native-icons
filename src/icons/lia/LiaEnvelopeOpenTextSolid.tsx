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

export const LiaEnvelopeOpenTextSolid = (props: IconProps) => {
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
        <Path d="M10 5v1.9l-5.992 3.903V27h23.984V10.803L22 6.898V5zm2 2h8v7.682l-4 2.591-4-2.591zm1 2v2h6V9zm-3 .285v4.102l-3.156-2.045zm12 0 3.156 2.057L22 13.387zM13 12v2h6v-2zm-6.992 1.184L16 19.656l9.992-6.472V25H6.008z" />
      </G>
    </Svg>
  );
};