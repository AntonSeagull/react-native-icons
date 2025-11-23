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

export const SiBinance = (props: IconProps) => {
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
        <Path d="m16.624 13.92 2.718 2.716-7.353 7.353-7.353-7.352 2.717-2.717 4.636 4.66zm4.637-4.636L24 12l-2.715 2.716L18.568 12zm-9.272 0 2.716 2.692-2.717 2.717L9.272 12zm-9.273 0L5.41 12l-2.692 2.692L0 12zM11.99.012 19.34 7.34l-2.717 2.715L11.99 5.42l-4.636 4.66-2.717-2.716z" />
      </G>
    </Svg>
  );
};