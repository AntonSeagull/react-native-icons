

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBoulesBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm50.28,40.75L60.75,178.28a84.87,84.87,0,0,1-8.36-13.7L164.58,52.39A84.87,84.87,0,0,1,178.28,60.75Zm17,17a84.87,84.87,0,0,1,8.36,13.7L91.42,203.61a84.87,84.87,0,0,1-13.7-8.36ZM128,44a84.53,84.53,0,0,1,10.37.66L44.66,138.37A83.87,83.87,0,0,1,128,44Zm0,168a84.53,84.53,0,0,1-10.37-.66l93.71-93.71A83.87,83.87,0,0,1,128,212Z" />
        </G>
      </Svg>
    );
  }

