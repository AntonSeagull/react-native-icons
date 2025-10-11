

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCaretForwardCircle = (props: IconProps) => {

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
          <Path d="M464,256c0-114.87-93.13-208-208-208S48,141.13,48,256s93.13,208,208,208S464,370.87,464,256ZM212,330.14V181.86a16,16,0,0,1,26.23-12.29l89.09,74.13a16,16,0,0,1,0,24.6l-89.09,74.13A16,16,0,0,1,212,330.14Z" />
        </G>
      </Svg>
    );
  }

