

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcReuse = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  fill="#607D8B" d="M31.7,15.9c-0.6-2-1.3-4-2.5-5.8c-1.3-1.6-3.2-3.1-6.1-2c-3.1,1.3-9.2,3.6-11.2,4.5 c-2.3,1.1-4.1,2.7-4.1,5.9c0,3.4,4.3,5.3,4.3,5.3l14.7-6.1l1.7,4.5l5.3,0.1C33.8,22.4,32.3,17.9,31.7,15.9z" />
          <Path  fill="#B39DDB" d="M37.9,42h-7.9c-1,0-1.8-0.7-2-1.7l-2.6-17.1h17l-2.6,17.1C39.8,41.3,38.9,42,37.9,42z" />
          <Path  fill="#7E57C2" d="M42,24H26c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C43,23.6,42.6,24,42,24z" />
        </G>
      </Svg>
    );
  }

