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

export const GrQr = (props: IconProps) => {
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
        <Path fill="#000" d="M13 14h1v1h-1zm1 1h1v1h-1zm0 1h1v1h-1zm2 0h1v1h-1zm0 1h1v1h-1zm-3-1h1v1h-1zm2 0h1v1h-1zm0 1h1v1h-1zm3-1h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm0 1h1v1h-1zm-1 1h1v1h-1zm-1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm-2 0h1v1h-1zm1 0h1v1h-1zm-2 0h1v1h-1zm0 1h1v1h-1zm1 1h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm-1-2h1v1h-1zm1 0h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm0 3h1v1h-1zm0-1h1v1h-1zm1-1h1v1h-1zm0-1h1v1h-1zm1 3h1v1h-1zm0-2h1v1h-1zm0 1h1v1h-1zm-2-3h1v1h-1zm-6 1h1v1h-1zm-1 0h1v1h-1zm0 1h1v1h-1zm2 0h1v1h-1zm-3 0h1v1h-1zm2 0h1v1h-1zm-2 1h1v1h-1zm0 1h1v1h-1zm0-19h1v1h-1zm1 1h1v1h-1zm-1 2h1v1h-1zm1 1h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm0 1h1v1h-1zm0 1h1v1h-1zm-1 1h1v1h-1zm1 0h1v1h-1zm-1 1h1v1h-1zM1 11h1v1H1zm1 1h1v1H2zm2-1h1v1H4zm0 1h1v1H4zm1-1h1v1H5zm1 1h1v1H6zm1-1h1v1H7zm1 1h1v1H8zm0-1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 1h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-1 2h1v1h-1zm-2 9h1v1h-1zm-1 0h1v1h-1zm0-9h1v1h-1zm-1 0h1v1h-1zm0 1h1v1h-1zm0 1h1v1h-1zm11-1h1v1h-1zm-1 1h1v1h-1zm1 2h1v1h-1zm-5-4h1v1h-1zm1-1h1v1h-1zm4 0h1v1h-1zm0 1h1v1h-1zm-1 0h1v1h-1zm1 8h1v1h-1zm-1 1h1v1h-1zm-2 0h1v1h-1zm3 0h1v1h-1z" />
        <Path stroke="#000" strokeWidth={2} d="M15 2h7v7h-7zM2 2h7v7H2zm0 13h7v7H2zM18 5h1v1h-1zM5 5h1v1H5zm0 13h1v1H5z" />
      </G>
    </Svg>
  );
};