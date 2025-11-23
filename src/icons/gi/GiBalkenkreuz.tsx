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

export const GiBalkenkreuz = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M486 203.066v105.879H308.934V486H203.066V308.934H26V203.066h177.066V26h105.879v177.066zm0-83.405h-93.638V26.023h-22.564v116.235H486v-22.563zM142.258 26.023h-22.563v93.638H26.056v22.563h116.202V26zm0 343.742H26v22.563h93.638v93.638h22.563V369.742zm250.081 22.563h93.638v-22.563H369.742V486h22.563v-93.638z" />
      </G>
    </Svg>
  );
};