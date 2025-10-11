

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFlag = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 10.008v-9.238l-11.879 4.619 11.879 4.619zM12 8.547l-8.121-3.158 8.121-3.159v6.317zM15 0v17h-1v-17h1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

