

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFilter = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" />
          <Path d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z" />
          <Path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" />
        </G>
      </Svg>
    );
  }

