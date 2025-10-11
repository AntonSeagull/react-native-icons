

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscBrowser = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12l.5-.5zM2 5v8h12V5H2zm0-1h12V2H2v2z" />
        </G>
      </Svg>
    );
  }

