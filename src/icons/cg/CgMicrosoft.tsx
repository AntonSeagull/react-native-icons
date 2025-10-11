

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMicrosoft = (props: IconProps) => {

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
          <Path d="M3 3H11V11H3V3Z" fill="currentColor" />
          <Path d="M3 13H11V21H3V13Z" fill="currentColor" />
          <Path d="M13 3H21V11H13V3Z" fill="currentColor" />
          <Path d="M13 13H21V21H13V13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

