

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaSoap = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M416,192a95.42,95.42,0,0,1-30.94,70.21A95.8,95.8,0,0,1,352,448H160a96,96,0,0,1,0-192h88.91A95.3,95.3,0,0,1,224,192H96A96,96,0,0,0,0,288V416a96,96,0,0,0,96,96H416a96,96,0,0,0,96-96V288A96,96,0,0,0,416,192Zm-96,64a64,64,0,1,0-64-64A64,64,0,0,0,320,256ZM208,96a48,48,0,1,0-48-48A48,48,0,0,0,208,96ZM384,64a32,32,0,1,0-32-32A32,32,0,0,0,384,64ZM160,288a64,64,0,0,0,0,128H352a64,64,0,0,0,0-128Z" />
        </G>
      </Svg>
    );
  }

