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

export const TbBrandWindowsFilled = (props: IconProps) => {
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
        <Path d="M21 13v5c0 1.57-1.248 2.832-2.715 2.923l-.113.003-.042.018a1 1 0 0 1-.336.056l-.118-.008L13 20.407V13zm-10 0v7.157l-5.3-.662C4.186 19.344 3 18.112 3 16.6V13zm0-9.158V11H3V7.4c0-1.454 1.096-2.648 2.505-2.87zM21 5.9V11h-8V3.591l4.717-.589C19.476 2.857 21 4.191 21 5.9" />
      </G>
    </Svg>
  );
};