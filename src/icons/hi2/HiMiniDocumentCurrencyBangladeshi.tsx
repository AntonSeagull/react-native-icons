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

export const HiMiniDocumentCurrencyBangladeshi = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2zm1.97 4.53a.75.75 0 0 0 .78.178V8h-1.5a.75.75 0 1 0 0 1.5h1.5v3.098c0 .98.571 2.18 1.837 2.356a4.75 4.75 0 0 0 5.066-2.92.75.75 0 0 0-.695-1.031H11.75a.75.75 0 0 0 0 1.5h.343a3.24 3.24 0 0 1-2.798.966c-.25-.035-.545-.322-.545-.87V9.5h5.5a.75.75 0 0 0 0-1.5h-5.5V6.415c0-1.19-1.439-1.786-2.28-.945a.75.75 0 0 0 0 1.06" clipRule="evenodd" />
      </G>
    </Svg>
  );
};