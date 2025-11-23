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

export const TbBrandCouchdb = (props: IconProps) => {
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
        <Path d="M6 12h12v-2a2 2 0 0 1 2-2 2 2 0 0 0-2-2H6a2 2 0 0 0-2 2 2 2 0 0 1 2 2zM6 15h12M6 18h12M21 11v7M3 11v7" />
      </G>
    </Svg>
  );
};