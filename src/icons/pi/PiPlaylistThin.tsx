

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPlaylistThin = (props: IconProps) => {

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
          <Path  d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,68H160a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm72,56H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm131.83-62.85a4,4,0,0,1-5,2.68L204,117.38V192a28,28,0,1,1-8-19.57V112a4,4,0,0,1,5.15-3.83l40,12A4,4,0,0,1,243.83,125.15ZM196,192a20,20,0,1,0-20,20A20,20,0,0,0,196,192Z" />
        </G>
      </Svg>
    );
  }

