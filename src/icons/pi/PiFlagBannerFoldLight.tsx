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

export const PiFlagBannerFoldLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M237 44.75a6 6 0 0 0-5-2.75h-80a6 6 0 0 0-5.46 3.52L137.23 66H28a6 6 0 0 0-4.44 10l36.33 40-36.33 40A6 6 0 0 0 28 166h73.09a6 6 0 0 0 5.46-3.52l9.31-20.48h66.82l-36.14 79.52a6 6 0 0 0 3 7.94 5.9 5.9 0 0 0 2.46.54 6 6 0 0 0 5.46-3.52l80-176a6 6 0 0 0-.46-5.73M97.23 154H41.56l30.88-34a6 6 0 0 0 0-8.08L41.56 78h90.21Zm90.91-24h-66.82l34.54-76h66.82Z" />
      </G>
    </Svg>
  );
};