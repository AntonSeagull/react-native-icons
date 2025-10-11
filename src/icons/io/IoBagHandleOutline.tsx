

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBagHandleOutline = (props: IconProps) => {

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
          <Path  d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  d="M160,224v16a96,96,0,0,0,96,96h0a96,96,0,0,0,96-96V224" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

