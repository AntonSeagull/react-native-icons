

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBackspaceOutline = (props: IconProps) => {

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
          <Line  x1="336.67" y1="192.33" x2="206.66" y2="322.34" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="336.67" y1="322.34" x2="206.66" y2="192.33" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="336.67" y1="192.33" x2="206.66" y2="322.34" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="336.67" y1="322.34" x2="206.66" y2="192.33" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M135.19,390.14A28.79,28.79,0,0,0,156.87,400H403.13A29,29,0,0,0,432,371.13V140.87A29,29,0,0,0,403.13,112H156.87a28.84,28.84,0,0,0-21.67,9.84v0L46.33,256l88.86,134.11Z" fill="none" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

