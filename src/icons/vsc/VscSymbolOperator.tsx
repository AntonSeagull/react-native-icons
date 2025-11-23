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

export const VscSymbolOperator = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2.873 1.1c.335.136.602.398.745.73.072.17.109.352.107.537a1.34 1.34 0 0 1-.61 1.135 1.36 1.36 0 0 1-.753.223A1.355 1.355 0 0 1 1 2.362a1.355 1.355 0 0 1 .83-1.256A1.37 1.37 0 0 1 2.873 1.1m-.298 1.765a.55.55 0 0 0 .332-.5.548.548 0 1 0-.332.5M6.43 1.109 1.11 6.43l.686.687 5.32-5.32zM11.5 9h1v2.5H15v1h-2.5V15h-1v-2.5H9v-1h2.5zm-5.732.525.707.707L4.707 12l1.768 1.768-.707.707L4 12.707l-1.768 1.768-.707-.707L3.293 12l-1.768-1.768.707-.707L4 11.293zm1.35-4.195a1.35 1.35 0 0 0-1.256-.83 1.355 1.355 0 0 0-1.256.83 1.362 1.362 0 0 0 1.257 1.895A1.358 1.358 0 0 0 7.118 5.33m-.753.745a.55.55 0 0 1-.289.29.55.55 0 0 1-.599-.117.5.5 0 0 1-.117-.173.544.544 0 0 1 .716-.715.6.6 0 0 1 .173.116.55.55 0 0 1 .116.599M14 3h-4v1h4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};