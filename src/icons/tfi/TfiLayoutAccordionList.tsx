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

export const TfiLayoutAccordionList = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 0v9h13V0zm12 8H5V1h11zM0 3h3V0H0zm1-2h1v1H1zm3 12h13v-3H4zm1-2h11v1H5zm-5 2h3v-3H0zm1-2h1v1H1zm3 6h13v-3H4zm1-2h11v1H5zm-5 2h3v-3H0zm1-2h1v1H1z" />
      </G>
    </Svg>
  );
};