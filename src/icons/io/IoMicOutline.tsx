

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMicOutline = (props: IconProps) => {

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
          <Path d="M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208" />
          <Path d="M256,64a63.68,63.68,0,0,0-64,64V239c0,35.2,29,65,64,65s64-29,64-65V128C320,92,292,64,256,64Z" />
        </G>
      </Svg>
    );
  }

