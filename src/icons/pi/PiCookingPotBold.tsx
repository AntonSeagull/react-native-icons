

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCookingPotBold = (props: IconProps) => {

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
          <Path  d="M253.76,93A12,12,0,0,0,237,90.24l-9,6.44V80a12,12,0,0,0-12-12H40A12,12,0,0,0,28,80V96.68l-9-6.44A12,12,0,1,0,5,109.76l23,16.42V184a36,36,0,0,0,36,36H192a36,36,0,0,0,36-36V126.18l23-16.42A12,12,0,0,0,253.76,93ZM204,184a12,12,0,0,1-12,12H64a12,12,0,0,1-12-12V92H204ZM76,40V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Zm40,0V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Zm40,0V16a12,12,0,0,1,24,0V40a12,12,0,0,1-24,0Z" />
        </G>
      </Svg>
    );
  }

