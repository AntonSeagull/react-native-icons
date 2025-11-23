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

export const TbMichelinBibGourmand = (props: IconProps) => {
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
        <Path d="M4.97 20c-2.395-1.947-4.763-5.245-1.005-8-.52-4 3.442-7.5 5.524-7.5.347-1 1.499-1.5 2.54-1.5s2.135.5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5 3.758 2.755 1.39 6.053-1.005 8" />
        <Path d="M8 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0M14 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0M8 17.085c3.5 2.712 6.5 2.712 9-1.085" />
        <Path d="M13 18.5c.815-2.337 1.881-1.472 2-.55" />
      </G>
    </Svg>
  );
};