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

export const LiaEnvelopeOpen = (props: IconProps) => {
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
        <Path d="m16 3-.531.344-12 7.812L3 11.47V29h26V11.469l-.469-.313-12-7.812Zm0 2.375L26.188 12 16 18.594 5.813 12ZM5 13.844l10.469 6.781.531.344.531-.344L27 13.844V27H5Z" />
      </G>
    </Svg>
  );
};