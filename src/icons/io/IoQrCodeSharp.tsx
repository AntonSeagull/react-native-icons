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

export const IoQrCodeSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M336 336h80v80h-80zM272 272h64v64h-64zM416 416h64v64h-64zM432 272h48v48h-48zM272 432h48v48h-48zM336 96h80v80h-80z" />
        <Path d="M480 240H272V32h208Zm-164-44h120V76H316ZM96 96h80v80H96z" />
        <Path d="M240 240H32V32h208ZM76 196h120V76H76ZM96 336h80v80H96z" />
        <Path d="M240 480H32V272h208ZM76 436h120V316H76Z" />
      </G>
    </Svg>
  );
};