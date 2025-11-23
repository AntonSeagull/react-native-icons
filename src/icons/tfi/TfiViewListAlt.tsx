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

export const TfiViewListAlt = (props: IconProps) => {
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
        <Path d="M5 0v4h12V0zm11 3H6V1h10zM5 10h12V6H5zm1-3h10v2H6zm-1 9h12v-4H5zm1-3h10v2H6zM0 4h4V0H0zm1-3h2v2H1zm-1 9h4V6H0zm1-3h2v2H1zm-1 9h4v-4H0zm1-3h2v2H1z" />
      </G>
    </Svg>
  );
};