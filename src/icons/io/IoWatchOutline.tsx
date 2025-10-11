

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWatchOutline = (props: IconProps) => {

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
          <Path  d="M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400" fill="none" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

