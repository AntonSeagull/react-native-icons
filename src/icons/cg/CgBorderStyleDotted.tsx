

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderStyleDotted = (props: IconProps) => {

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
          <Path d="M3 11H1V13H3V11Z" fill="currentColor" />
          <Path d="M7 11H5V13H7V11Z" fill="currentColor" />
          <Path d="M9 11H11V13H9V11Z" fill="currentColor" />
          <Path d="M15 11H13V13H15V11Z" fill="currentColor" />
          <Path d="M17 11H19V13H17V11Z" fill="currentColor" />
          <Path d="M23 11H21V13H23V11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

