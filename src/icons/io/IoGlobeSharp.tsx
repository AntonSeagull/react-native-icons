

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGlobeSharp = (props: IconProps) => {

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
          <Line  x1="256" y1="48" x2="256" y2="464" fill="none" strokeMiterlimit="10" strokeWidth="44px" />
          <Line  x1="464" y1="256" x2="48" y2="256" fill="none" strokeMiterlimit="10" strokeWidth="44px" />
          <Path  d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Z" fill="none" strokeMiterlimit="10" strokeWidth="44px" />
          <Path  d="M256,48c-58.07,0-112.67,93.13-112.67,208S197.93,464,256,464s112.67-93.13,112.67-208S314.07,48,256,48Z" fill="none" strokeMiterlimit="10" strokeWidth="44px" />
          <Path  d="M117.33,121.33c38.24,27.15,86.38,43.34,138.67,43.34s100.43-16.19,138.67-43.34" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
          <Path  d="M394.67,390.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43,16.19-138.67,43.34" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
        </G>
      </Svg>
    );
  }

