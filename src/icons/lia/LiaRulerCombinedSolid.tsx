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

export const LiaRulerCombinedSolid = (props: IconProps) => {
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
        <Path d="M4 4v24h24v-9H13V4zm2 2h5v2H8v2h3v2H8v2h3v2H8v2h3v1.586l-5 5zm6.414 15H14v3h2v-3h2v3h2v-3h2v3h2v-3h2v5H7.414z" />
      </G>
    </Svg>
  );
};