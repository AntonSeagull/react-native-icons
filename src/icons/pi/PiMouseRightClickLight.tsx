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

export const PiMouseRightClickLight = (props: IconProps) => {
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
        <Path d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62m50 62v26h-35.51l34.73-34.73A50 50 0 0 1 194 80m-4.9-21.58L141.51 106H134V82.49l41.38-41.38a50.3 50.3 0 0 1 13.72 17.31M164.91 34.6 134 65.51V30h10a49.7 49.7 0 0 1 20.91 4.6M112 30h10v76H62V80a50.06 50.06 0 0 1 50-50m32 196h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50" />
      </G>
    </Svg>
  );
};