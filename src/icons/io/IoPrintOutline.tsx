

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPrintOutline = (props: IconProps) => {

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
          <Path d="M384,368h24a40.12,40.12,0,0,0,40-40V168a40.12,40.12,0,0,0-40-40H104a40.12,40.12,0,0,0-40,40V328a40.12,40.12,0,0,0,40,40h24" />
          <Path d="M384,128V104a40.12,40.12,0,0,0-40-40H168a40.12,40.12,0,0,0-40,40v24" />
        </G>
      </Svg>
    );
  }

