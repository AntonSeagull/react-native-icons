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

export const CiViewList = (props: IconProps) => {
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
        <Path d="M18.436 20.937H5.562a2.5 2.5 0 0 1-2.5-2.5V5.563a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.874a2.5 2.5 0 0 1-2.5 2.5M5.562 4.063a1.5 1.5 0 0 0-1.5 1.5v12.874a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.563a1.5 1.5 0 0 0-1.5-1.5Z" />
        <Path d="M6.544 8.283a.52.52 0 0 1-.353-.147.5.5 0 0 1 0-.707.5.5 0 0 1 .353-.146H7.55a.52.52 0 0 1 .353.146.5.5 0 0 1 .147.354.5.5 0 0 1-.5.5ZM6.544 12.5a.52.52 0 0 1-.353-.146.5.5 0 0 1 0-.708.52.52 0 0 1 .353-.146H7.55a.52.52 0 0 1 .353.146.5.5 0 0 1 0 .708.52.52 0 0 1-.353.146ZM6.544 16.72a.52.52 0 0 1-.353-.147.5.5 0 0 1 0-.707.52.52 0 0 1 .353-.146H7.55a.52.52 0 0 1 .353.146.5.5 0 0 1 .147.354.5.5 0 0 1-.5.5ZM10.554 8.281a.5.5 0 0 1 0-1h6.9a.5.5 0 0 1 0 1ZM10.554 12.5a.5.5 0 0 1 0-1h6.9a.5.5 0 0 1 0 1ZM10.554 16.718a.5.5 0 0 1 0-1h6.9a.5.5 0 0 1 0 1Z" />
      </G>
    </Svg>
  );
};