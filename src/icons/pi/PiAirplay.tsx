

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAirplay = (props: IconProps) => {

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
          <Path  d="M134.08,154.79a8,8,0,0,0-12.15,0l-48,56A8,8,0,0,0,80,224h96a8,8,0,0,0,6.07-13.21ZM97.39,208,128,172.29,158.61,208ZM232,64V176a24,24,0,0,1-24,24h-8a8,8,0,0,1,0-16h8a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8h8a8,8,0,0,1,0,16H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Z" />
        </G>
      </Svg>
    );
  }

