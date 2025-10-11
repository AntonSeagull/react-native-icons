

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBelt = (props: IconProps) => {

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
          <Path  d="M248,160H192V96h56a8,8,0,0,0,0-16H189.83A16,16,0,0,0,176,72H112a16,16,0,0,0-13.83,8H64a8,8,0,0,0-16,0H8A8,8,0,0,0,8,96H48v64H8a8,8,0,0,0,0,16H48a8,8,0,0,0,16,0H98.17A16,16,0,0,0,112,184h64a16,16,0,0,0,13.83-8H248a8,8,0,0,0,0-16ZM64,96H96v64H64Zm48,72V88h64v32H144a8,8,0,0,0,0,16h32v31.8c0,.07,0,.13,0,.2Z" />
        </G>
      </Svg>
    );
  }

