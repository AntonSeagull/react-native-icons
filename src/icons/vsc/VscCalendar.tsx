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

export const VscCalendar = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12zM14 14H2V5h12zm0-10H2V3h12zM4 8H3v1h1zm-1 2h1v1H3zm1 2H3v1h1zm2-4h1v1H6zm1 2H6v1h1zm-1 2h1v1H6zm1-6H6v1h1zm2 2h1v1H9zm1 2H9v1h1zm-1 2h1v1H9zm1-6H9v1h1zm2 2h1v1h-1zm1 2h-1v1h1zm-1-4h1v1h-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};