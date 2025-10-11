

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoDropbox = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7.004 3.5 2 6.689l5.004 3.186 5.002-3.186zm10.005 0-5.003 3.189 5.003 3.186 5.003-3.186zM2 13.062l5.004 3.187 5.002-3.187-5.002-3.187zm15.009-3.187-5.003 3.187 5.003 3.187 5.003-3.187zM7.004 17.311l5.002 3.189 5.003-3.189-5.003-3.186z" />
        </G>
      </Svg>
    );
  }

