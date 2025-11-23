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

export const TfiLayoutMediaLeft = (props: IconProps) => {
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
        <Path d="M10 4h5.826v1H10zM10 7.996h3.497v1H10zM10.009 5.998H17v1h-6.991zM10 9.993h6.991v1H10zM10 12h5.826v1H10zM0 13h9V4H0zm1-8h7v7H1z" />
      </G>
    </Svg>
  );
};