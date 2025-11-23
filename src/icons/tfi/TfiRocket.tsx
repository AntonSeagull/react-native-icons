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

export const TfiRocket = (props: IconProps) => {
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
        <Path d="M12 11V5c0-5-3-5-3-5S6 0 6 5v6s-2 0-2 6c0 0 2.379-2.375 4.312-2.895.004.582.31 1.051.688 1.051s.684-.47.688-1.051C11.621 14.625 14 17 14 17c0-6-2-6-2-6M9 1.001c.26.021 1.667.27 1.947 2.999H7.053C7.333 1.271 8.74 1.022 9 1.001M9 13c-1.271 0-2.742.868-3.877 1.717.263-2.121.859-2.629.993-2.717H7V5h4v7h.884c.134.088.73.596.993 2.717C11.742 13.868 10.271 13 9 13" />
      </G>
    </Svg>
  );
};