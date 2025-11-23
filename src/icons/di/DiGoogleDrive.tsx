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

export const DiGoogleDrive = (props: IconProps) => {
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
        <Path fill="#444" d="M12.649 20.427h-.126l-.061.109-3.245 5.675H23.99l.061-.109 3.246-5.674h-.373zm7.924-1.352.062.108h.126l6.536-.028-.187-.322-7.199-12.471h-.126l-6.537.027.187.322zm-5.128-6.286-.063-.109-3.292-5.646-.186.322-7.201 12.47.064.109 3.292 5.648.186-.323 7.138-12.363z" />
      </G>
    </Svg>
  );
};