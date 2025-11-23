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

export const FcStackOfPhotos = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#64B5F6" d="m17.474 8.578 26.544 8.904-8.904 26.544L8.57 35.122z" />
        <Path fill="#1E88E5" d="m19.238 12.504 20.922 6.82-6.2 19.02-20.922-6.82z" />
        <Path fill="#90CAF9" d="m10.881 5.778 27.524 5.068-5.068 27.524-27.524-5.068z" />
        <Path fill="#42A5F5" d="m13.219 9.444 21.67 3.85-3.5 19.7-21.67-3.85z" />
        <Path fill="#BBDEFB" d="M4 4h28v28H4z" />
        <Path fill="#4CAF50" d="M7 7h22v20H7z" />
        <Path fill="#fff" d="M16 13c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4-2-2.9-2-4M20 21c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4" />
        <Path fill="#fff" d="M13.5 16.7c-1-.6-1.3-1.8-.7-2.7.6-1 1.8-1.3 2.7-.7 1 .6 2.5 3.7 2.5 3.7s-3.5.3-4.5-.3M22.5 17.3c1 .6 1.3 1.8.7 2.7-.6 1-1.8 1.3-2.7.7-1-.5-2.5-3.7-2.5-3.7s3.5-.3 4.5.3" />
        <Path fill="#fff" d="M22.5 16.7c1-.6 1.3-1.8.7-2.7-.6-1-1.8-1.3-2.7-.7-1 .5-2.5 3.7-2.5 3.7s3.5.3 4.5-.3M13.5 17.3c-1 .6-1.3 1.8-.7 2.7.6 1 1.8 1.3 2.7.7 1-.6 2.5-3.7 2.5-3.7s-3.5-.3-4.5.3" />
        <Circle cx={18} cy={17} r={2} fill="#FFC107" />
      </G>
    </Svg>
  );
};