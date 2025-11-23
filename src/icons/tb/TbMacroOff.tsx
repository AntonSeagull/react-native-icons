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

export const TbMacroOff = (props: IconProps) => {
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
        <Path d="M6 15a6 6 0 0 0 11.47 2.467" />
        <Path d="M15.53 15.53A6 6 0 0 0 12 21" />
        <Path d="M12 21a6 6 0 0 0-6-6M12 21V11M10.866 10.87a5.01 5.01 0 0 1-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18" />
      </G>
    </Svg>
  );
};