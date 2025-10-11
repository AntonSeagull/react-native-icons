

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPersonSharp = (props: IconProps) => {

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
          <Path  d="M256,256A112,112,0,1,0,144,144,112,112,0,0,0,256,256Zm0,32c-69.42,0-208,42.88-208,128v64H464V416C464,330.88,325.42,288,256,288Z" />
        </G>
      </Svg>
    );
  }

