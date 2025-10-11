

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBagRemoveOutline = (props: IconProps) => {

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
          <Line  fill="none" x1="320" y1="320" x2="192" y2="320" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Path  fill="none" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" fillRule="evenodd" />
          <Path  fill="none" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" fillRule="evenodd" />
        </G>
      </Svg>
    );
  }

