

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoScan = (props: IconProps) => {

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
          <Path  d="M342,444h46a56,56,0,0,0,56-56V342" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
          <Path  d="M444,170V124a56,56,0,0,0-56-56H342" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
          <Path  d="M170,444H124a56,56,0,0,1-56-56V342" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
          <Path  d="M68,170V124a56,56,0,0,1,56-56h46" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44px" />
        </G>
      </Svg>
    );
  }

