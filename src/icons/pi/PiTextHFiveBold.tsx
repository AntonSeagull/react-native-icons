

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHFiveBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M252,180a40,40,0,0,1-40,40,39.53,39.53,0,0,1-28.57-11.6,12,12,0,1,1,17.14-16.8A15.54,15.54,0,0,0,212,196a16,16,0,0,0,0-32,15.54,15.54,0,0,0-11.43,4.4A12,12,0,0,1,180.16,158l8-48A12,12,0,0,1,200,100h40a12,12,0,0,1,0,24H210.17l-2.71,16.23A45.39,45.39,0,0,1,212,140,40,40,0,0,1,252,180ZM144,44a12,12,0,0,0-12,12v48H52V56a12,12,0,0,0-24,0V176a12,12,0,0,0,24,0V128h80v48a12,12,0,0,0,24,0V56A12,12,0,0,0,144,44Z" />
        </G>
      </Svg>
    );
  }

