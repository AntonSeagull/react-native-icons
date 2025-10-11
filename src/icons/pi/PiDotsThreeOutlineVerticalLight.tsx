

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotsThreeOutlineVerticalLight = (props: IconProps) => {

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
          <Path  d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Zm0-68A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30Zm0,148a30,30,0,1,0,30,30A30,30,0,0,0,128,178Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,226Z" />
        </G>
      </Svg>
    );
  }

