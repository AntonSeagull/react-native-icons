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

export const TbPizza = (props: IconProps) => {
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
        <Path d="M12 21.5c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.1 19.1 0 0 1 12 21.5" />
        <Path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634 14.94 14.94 0 0 0 6.502-1.479M13 11.01V11M11 14v-.01" />
      </G>
    </Svg>
  );
};